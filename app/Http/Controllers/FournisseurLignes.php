<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Command;
use App\Models\Fournisseur;
use App\Models\Produit;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FournisseurLignes extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $data = request()->validate([
            "fournisseur_id"   => ['required', "exists:fournisseurs,id"],
            "produit_id"  => ['required', "exists:produits,id"],
            "quantite"    => ['required', "integer"],
        ]);

    
        $fournisseur = Fournisseur::findOrFail($data['fournisseur_id']);
        $produit = Produit::findOrFail($data['produit_id']);
        $stock = Stock::where("produit_id", $data['produit_id'])->first();
    
        $ligneCommande = DB::table("ligne_commandes")
            ->where("produit_id", $data["produit_id"])
            ->where('fournisseur_id', $data["fournisseur_id"])
            ->whereNull("command_id")
            ->first();
        
        // dd($ligneCommande);
    
        $quantiteDemandee = $data['quantite'];
        $quantiteTotale = $ligneCommande !== null ? $ligneCommande->quantite + $quantiteDemandee : $quantiteDemandee;
    
        if (!$stock || $stock->stock_quantite < $quantiteTotale) {
            return redirect()->route('fourniCommands.create')->with('error', "Cette quantité n'est pas disponible en stock");
        }
    
        $sousTotal = $quantiteTotale * $produit->prix_vente;
    
        if ($ligneCommande) {
            DB::table('ligne_commandes')
                ->where('id', $ligneCommande->id)
                ->update([
                    'quantite'    => $quantiteTotale,
                    'sous_total'  => $sousTotal,
                ]);
        } else {
            $fournisseur->produits()->attach($data['produit_id'], [
                'command_id' => null,
                'client_id' => null,
                'sous_total' => $sousTotal,
                'quantite'   => $quantiteDemandee,
            ]);
        }
    
        // $stock->decrement('stock_quantite', $quantiteDemandee);
    
        session()->put("fournisseur_id", $fournisseur->id);
    
        return redirect()->route('fourniCommands.create')->with("success", "Ligne de commande ajoutée ou mise à jour avec succès.");
    }
    
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        
        DB::table('ligne_commandes')->where('id', $id)->delete();  
        
        return redirect()->route('commands.create')->with("success", "Ligne de commande supprimer avec succès.");
    }
}
