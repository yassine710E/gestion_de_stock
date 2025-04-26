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
    public function index()
    {
        $commands = DB::table("commands")
        ->join("ligne_commandes", "commands.id", "=", "ligne_commandes.command_id")
        ->join("fournisseurs", "fournisseurs.id", "=", "ligne_commandes.fournisseur_id")
        ->paginate(5) ;
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

    }

    public function destroy(string $id)
    {
        
        DB::table('ligne_commandes')->where('id', $id)->delete();
        
        return redirect()->route('fourniCommands.create')->with("success", "Ligne de commande supprimer avec succès.");
    }
}
