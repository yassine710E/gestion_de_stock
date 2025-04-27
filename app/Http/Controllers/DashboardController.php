<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Client;
use App\Models\Fournisseur;
use App\Models\Produit;
use App\Models\Stock;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $products = Produit::all()->count();
        $totalPaidOrders = DB::table('commands')
        ->join('ligne_commandes', 'commands.id', '=', 'ligne_commandes.command_id')
        ->whereNotNull('ligne_commandes.client_id')
        ->sum('commands.total');
        $sales = DB::table('commands')
        ->join('ligne_commandes', 'commands.id', '=', 'ligne_commandes.command_id')
        ->whereNotNull('ligne_commandes.client_id')
        ->distinct('commands.id')
        ->count('commands.id');


    $users = User::all()->count();

    $clientsWithRecentSales = DB::table('clients')
    ->join('ligne_commandes', 'clients.id', '=', 'ligne_commandes.client_id')
    ->join('commands', 'ligne_commandes.command_id', '=', 'commands.id')
    ->whereNotNull('clients.id')
    ->whereNotNull('ligne_commandes.command_id')
    ->orderBy('commands.date_achat', 'desc') 
    ->distinct('clients.id')  
    ->select('clients.nom', 'clients.prenom', 'clients.email',"commands.total")
    ->get();
    $results = DB::table('commands')
    ->selectRaw("
        strftime('%m', COALESCE(date_achat, date_livraison)) AS month,
        SUM(CASE 
                WHEN date_livraison IS NULL 
                AND date_achat IS NOT NULL 
                AND strftime('%Y', date_achat) = strftime('%Y', 'now') 
            THEN total 
            ELSE 0 
        END) AS total_sales,
        SUM(CASE 
                WHEN date_achat IS NULL 
                AND date_livraison IS NOT NULL 
                AND strftime('%Y', date_livraison) = strftime('%Y', 'now') 
            THEN total 
            ELSE 0 
        END) AS total_achats_fournisseur,
        (
            SUM(CASE 
                    WHEN date_livraison IS NULL 
                    AND date_achat IS NOT NULL 
                    AND strftime('%Y', date_achat) = strftime('%Y', 'now') 
                THEN total 
                ELSE 0 
            END) 
            - 
            SUM(CASE 
                    WHEN date_achat IS NULL 
                    AND date_livraison IS NOT NULL 
                    AND strftime('%Y', date_livraison) = strftime('%Y', 'now') 
                THEN total 
                ELSE 0 
            END)
        ) AS difference
    ")
    ->whereRaw("strftime('%Y', COALESCE(date_achat, date_livraison)) = strftime('%Y', 'now')")
    ->groupBy(DB::raw("strftime('%m', COALESCE(date_achat, date_livraison))"))
    ->orderBy('month')
    ->get();
        
        return Inertia::render("Dashboard", compact([
            "products",
            "totalPaidOrders",
            "users",
            "sales",
            "clientsWithRecentSales",
            "results"
        ]));
    }
}
