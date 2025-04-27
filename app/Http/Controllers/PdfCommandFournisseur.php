<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class PdfCommandFournisseur extends Controller
{
    public function generatePDF(String $id)
    {
        $command = DB::table('commands')
        ->where('id', $id)
        ->first();

        // 2. Get the client
        $fournisseur = DB::table('fournisseurs')
        ->join('ligne_commandes', 'fournisseurs.id', '=', 'ligne_commandes.fournisseur_id')
        ->where('ligne_commandes.command_id', $id)
        ->select('fournisseurs.*') // ajout plus d'infos si بغيت
        ->first();

        // 3. Get products
        $products = DB::table('produits')
        ->join('ligne_commandes', 'produits.id', '=', 'ligne_commandes.produit_id')
        ->where('ligne_commandes.command_id', $id)
        ->select('produits.nom_produit', 'produits.prix_vente', 'ligne_commandes.quantite')
        ->get();

        $data=[
            "command"=>$command,
            "fournisseur"=>$fournisseur,
            "products"=>$products
        ];

        $pdf = Pdf::loadView('FourCommandePdf', $data);
        
        return  $pdf->download('Bon-Livraison-Fournisseur-'.$fournisseur->nom_complet.'.pdf');
    }
}
