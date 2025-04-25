<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Command;
use App\Models\Produit;
use App\Models\Stock;
use Illuminate\Http\Request;

class LignCommandeController extends Controller
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
            "client_id"=>['required',"exists:clients,id"],
            "produit_id"=> ['required',"exists:produits,id"],
            "quantite"=>['required',"integer"],
        ]);




        $client = Client::findOrFail(id: $data['client_id']);

        $produit = Produit::findOrFail($data['produit_id']);

        $stock = Stock::where("produit_id",$produit->id)->first();
        
        if (isset($stock) && $stock->stock_quantite < $data['quantite'] ) 
        {
          return redirect()->back()->with('error',"cette quantité n'est pas disponible en stock") ;
        }

        $sousTotal = $data['quantite']*$produit->prix_vente;

        $client->produits()->attach($data['produit_id'],[ 'command_id' => null,"sous_total"=>$sousTotal,"quantite"=>$data['quantite']]);

        

        session()->put("client_id",$client->id);


        return redirect()->back()->with("success","Ligne de commande ajoutée avec succès.");
        
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
        //
    }
}
