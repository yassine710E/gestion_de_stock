<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Command;
use App\Models\Fournisseur;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class fourniCommandsController extends Controller
{
    public function index(Request $request)
    {
        $query = DB::table("commands")
        ->join("ligne_commandes", "commands.id", "=", "ligne_commandes.command_id")
        ->join("fournisseurs", "fournisseurs.id", "=", "ligne_commandes.fournisseur_id")
        ->whereNull("ligne_commandes.client_id")
        ->select(
        'commands.id as id',
        'commands.date_livraison',
        'commands.total',
        'fournisseurs.id as fournisseur_id',
        'fournisseurs.nom_complet',
        'fournisseurs.telephone',
        'fournisseurs.email'
    );
        if ($request->filled('name')) {
            $query->where(function($q) use ($request) {
                $q->where('fournisseurs.nom_complet', 'like', '%' . $request->name . '%');
            });
        }
    
        if ($request->filled('date_debut')) {
            $query->whereDate('commands.date_livraison', '>=', $request->date_debut);
        }
    
        if ($request->filled('date_fin')) {
            $query->whereDate('commands.date_livraison', '<=', $request->date_fin);
        }
    
        $commands = $query->paginate(10)->withQueryString();
        return Inertia::render("FourniCommand/Index", compact("commands")) ;
    }


    public function create()
    {
        $fournisseurs = Fournisseur::all();
        
        $fourni_id = session()->get("fourni_id");

  
        $produits = Produit::all();
        
        $allLingsCommand = [];


        $allLingsCommand = DB::table('ligne_commandes')
        ->whereNull('command_id')
        ->whereNull("client_id")
        ->join('produits', 'ligne_commandes.produit_id', '=', 'produits.id')
        ->select('ligne_commandes.*', 'produits.nom_produit', 'produits.prix_vente',"produits.photo")
        ->get();

        session()->put("client_id", $fourni_id);
            
        return Inertia::render("FourniCommand/Create", compact("fournisseurs", "produits", "allLingsCommand"));
    }


    public function store()
    {
        $data = request()->validate([
            'fournisseur_id'=>['required',"numeric"],
            'total'=>['required',"numeric"]
        ]);

        $commande = Command::create([
            'total' => $data['total'],
            "date_achat"=>null 
        ]);

        DB::table('ligne_commandes')
        ->where('fournisseur_id', $data['fournisseur_id'])
        ->whereNull('command_id')
        ->update([
            'command_id' => $commande->id,
            'updated_at' => now(),
        ]);

        $lignes = DB::table('ligne_commandes')
        ->where('fournisseur_id', $data['fournisseur_id'])
        ->where('command_id', $commande->id)
        ->get();

        foreach ($lignes as $ligne) {
            DB::table('stocks')
                ->where('produit_id', $ligne->produit_id)
                ->increment('stock_quantite', $ligne->quantite);
        }

        return redirect()->route(route: "FourniCommands.index")->with("success", "nouvelle command est ajouter avec success !");

    }

    
    public function show(String $id)
    {

        $command = DB::table('commands')
        ->where('id', $id)
        ->first();

        $fournisseur = DB::table('fournisseurs')
        ->join('ligne_commandes', 'fournisseurs.id', '=', 'ligne_commandes.fournisseur_id')
        ->where('ligne_commandes.command_id', $id)
        ->select('fournisseurs.nom_complet',  'fournisseurs.email', 'fournisseurs.telephone')
        ->first();

        $products = DB::table('produits')
        ->join('ligne_commandes', 'produits.id', '=', 'ligne_commandes.produit_id')
        ->where('ligne_commandes.command_id', $id)
        ->select('produits.nom_produit', 'produits.prix_vente',"produits.photo" ,'ligne_commandes.quantite')
        ->get();

        return Inertia::render("FourniCommand/Show", compact("command",'fournisseur',"products")) ;

    }

    public function destroy($id)
    {
        $command = Command::findOrFail($id) ;
        $command->delete() ;
        return redirect()->back()->with("success", " command est supprimer avec success !");
    }
}
