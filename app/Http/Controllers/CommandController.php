<?php

namespace App\Http\Controllers;

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
    public function index()
    {
        $commands = Command::paginate(8) ;
        return Inertia::render("Command/Index", compact("commands")) ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clients = Client::all();
        
        
        $client_id = session()->get("client_id");

  
        $produits = Produit::all();
        
        $allLingsCommand = [];
        
        

        if ($client_id) {
            
            $allLingsCommand = DB::table('ligne_commandes')
            ->whereNull('command_id')
            ->join('produits', 'ligne_commandes.produit_id', '=', 'produits.id')
            ->select('ligne_commandes.*', 'produits.nom_produit', 'produits.prix_vente',"produits.photo")
            ->get();


        }
        
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
        DB::table('stocks')
            ->where('produit_id', $ligne->produit_id)
            ->decrement('stock_quantite', $ligne->quantite);
    }
        


        
    }

    /**
     * Display the specified resource.
     */
    public function show(Command $command)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Command $command)
    {
        return Inertia::render("Command/Edit", compact("command")) ;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Command $command)
    {
        $validData = $request->validate([
            "date_achat" => ["required"],
            "date_livraison" => ["required"],
            "date_paiement" => ["required"],
            "total" => ["required"],
            "paye" => ["required"],
            "prix_paye" => []
        ]);

        if($request->paye === "non"){
            $validData["prix_paye"] = 0 ;
        };

        $command->update($validData);
        return redirect()->route("commands.index")->with("success", " command est modifier avec success !");
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
