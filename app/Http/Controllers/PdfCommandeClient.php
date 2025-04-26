<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PdfCommandeClient extends Controller
{

    public function generatePDF(String $id){

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
    ->select('produits.nom_produit', 'produits.prix_vente', 'ligne_commandes.quantite')
    ->get();

        $data=[
            "command"=>$command,
            "client"=>$client,
            "products"=>$products
        ];

        $pdf = Pdf::loadView('ClientCommandePdf', $data);
        
        return  $pdf->download('Bon-Achat-Client-'.$client->nom.'.pdf');
    }
}
