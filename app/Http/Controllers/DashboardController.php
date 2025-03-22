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
        return Inertia::render("Dashboard", compact([
                                                                                "categories",
                                                                                "products",
                                                                                "clients",
                                                                                "fournisseurs",
                                                                                "stocks"
                                                                            ]));
    }
}
