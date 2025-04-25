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

        // $produits = Produit::join('ligne_commandes', 'produits.id', '=', 'ligne_commandes.produit_id')
        // ->whereNotNull('ligne_commandes.command_id')
        // ->where('ligne_commandes.client_id', '<>', $client_id)
        // ->select('produits.*')
        // ->get();
        
        $produits = Produit::all();
        
        $commandProduits = [];

        if ($client_id) {
            
            $commandProduits = DB::table('ligne_commandes')
            ->where('client_id', $client_id)
            ->whereNull('command_id') // 👈 this is the condition you're looking for
            ->join('produits', 'ligne_commandes.produit_id', '=', 'produits.id')
            ->select('produits.nom_produit', 'ligne_commandes.quantite', 'ligne_commandes.sous_total')
            ->get();
        }
        
        return Inertia::render("Command/Create", compact("clients", "produits", "commandProduits",'client_id'));    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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

        Command::create($validData) ;
        return redirect()->route("commands.index")->with("success", "nouvelle command ajouter avec success !");
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
