<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Client;
use App\Models\Fournisseur;
use App\Models\Produit;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $categories = Category::all()->count();
        $products = Produit::all()->count();
        $clients = Client::all()->count();
        $fournisseurs = Fournisseur::all()->count();
        $stocks = Stock::all()->count();

        $lowProduct = Produit::join('stocks', 'produits.id', '=', 'stocks.produit_id')
        ->whereColumn('stocks.stock_quantite', '<', 'produits.min_stock')
        ->orderBy('stocks.stock_quantite')
        ->limit(3)
        ->get();
    
    $highProduct = Produit::join('stocks', 'produits.id', '=', 'stocks.produit_id')
        ->whereColumn('stocks.stock_quantite', '>', 'produits.max_stock')
        ->orderByDesc('stocks.stock_quantite')
        ->limit(3)
        ->get();

    

        $StockValue = Stock::selectRaw('SUM(prix_stock * stock_quantite) as total_value')->first()->total_value;

        $totalProfit = Produit::join("stocks","produits.id","=","stocks.produit_id")
        ->selectRaw('SUM(produits.prix_vente-stocks.prix_stock) as totalProfit')->first()->totalProfit;

        
        return Inertia::render("Dashboard", compact([
            "categories",
            "products",
            "clients",
            "fournisseurs",
            "stocks",
            "lowProduct",
            "highProduct",
            "StockValue",
            "totalProfit"
        ]));
    }
}
