<?php

namespace App\Http\Controllers;

use App\Events\StockNotification;
use App\Models\Client;
use App\Models\Command;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CommandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = DB::table('commands')
        ->leftJoin('ligne_commandes', 'commands.id', '=', 'ligne_commandes.command_id')
        ->leftJoin('clients', 'ligne_commandes.client_id', '=', 'clients.id')
        ->whereNull('ligne_commandes.fournisseur_id') 
        ->whereNull("commands.date_livraison")
        ->select(
            'commands.*',
            'clients.nom as client_nom',
            'clients.prenom as client_prenom'
        )
        ->groupBy(
            'commands.id',
            'clients.nom',
            'clients.prenom',
            'commands.date_achat',
            'commands.date_livraison',
            'commands.total'
        );
        if ($request->filled('name')) {
            $query->where(function($q) use ($request) {
                $q->where('clients.nom', 'like', '%' . $request->name . '%')
                  ->orWhere('clients.prenom', 'like', '%' . $request->name . '%');
            });
        }

        if ($request->filled('date_debut')) {
            $query->whereDate('commands.date_achat', '>=', $request->date_debut);
        }

        if ($request->filled('date_fin')) {
            $query->whereDate('commands.date_achat', '<=', $request->date_fin);
        }

        $commands = $query->paginate(10)->withQueryString();

         return Inertia::render("Command/Index", compact("commands")) ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clients = Client::all();


        $client_id = session()->get("client_id");


        $produits = Produit::with("stock")->get();


        $allLingsCommand = DB::table('ligne_commandes')
        ->whereNull('command_id')
        ->join('produits', 'ligne_commandes.produit_id', '=', 'produits.id')
        ->select('ligne_commandes.*', 'produits.nom_produit', 'produits.prix_vente',"produits.photo")
        ->get();

        return Inertia::render("Command/Create", compact("clients", "produits", "allLingsCommand",'client_id'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $data = request()->validate([
            'client_id'=>['required',"numeric"],
            'total'=>['required',"numeric"]
        ]);

        $commande = Command::create([
                  'total' => $data['total'],
                  "date_livraison"=>null
                   ]);

        // 2. Mise à jour des lignes de commande
        DB::table('ligne_commandes')
        ->where('client_id', $data['client_id'])
        ->whereNull('command_id')
        ->update([
            'command_id' => $commande->id,
            'updated_at' => now(),
        ]);

        //decrement product of this command ??

        $lignes = DB::table('ligne_commandes')
        ->where('client_id', $data['client_id'])
        ->where('command_id', $commande->id)
        ->get();


        foreach ($lignes as $ligne) {
            // نقص الكمية
            DB::table('stocks')
                ->where('produit_id', $ligne->produit_id)
                ->decrement('stock_quantite', $ligne->quantite);
        
            // بدل العملية
            DB::table('stocks')
                ->where('produit_id', $ligne->produit_id)
                ->update(['operation' => 'S']);
        
            // نجيب المعلومات من stocks + produits
            $stockInfo = DB::table('stocks')
                ->join('produits', 'stocks.produit_id', '=', 'produits.id')
                ->where('stocks.produit_id', $ligne->produit_id)
                ->select(
                    'stocks.stock_quantite',
                    'produits.nom_produit',
                    'produits.min_stock',
                    'produits.max_stock'
                )
                ->first();
        
            if ($stockInfo) {
                if ($stockInfo->stock_quantite > $stockInfo->max_stock) {
                    event(new StockNotification("Le produit {$stockInfo->nom_produit} a dépassé la quantité maximale en stock !", 'over_max'));
                } elseif ($stockInfo->stock_quantite < $stockInfo->min_stock) {
                    event(new StockNotification("Le produit {$stockInfo->nom_produit} est proche de la rupture de stock !", 'under_min'));
                }
            }
        }
        

    return redirect()->route(route: "commands.index")->with("success", "nouvelle command est ajouter avec success !");

    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
             // 1. Get the command
    $command = DB::table('commands')
    ->where('id', $id)
    ->first();

     // 2. Get the client
     $client = DB::table('clients')
    ->join('ligne_commandes', 'clients.id', '=', 'ligne_commandes.client_id')
    ->where('ligne_commandes.command_id', $id)
    ->select('clients.nom', 'clients.prenom', 'clients.email', 'clients.telephone') // ajout plus d'infos si بغيت
    ->first();

    // 3. Get products
    $products = DB::table('produits')
    ->join('ligne_commandes', 'produits.id', '=', 'ligne_commandes.produit_id')
    ->where('ligne_commandes.command_id', $id)
    ->select('produits.nom_produit', 'produits.prix_vente',"produits.photo" ,'ligne_commandes.quantite')
    ->get();

    return Inertia::render("Command/Show", compact("command",'client',"products")) ;

    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Command $command)
    {
        $command->delete() ;
        return redirect()->route("commands.index")->with("success", " command est supprimer avec success !");
    }
}
