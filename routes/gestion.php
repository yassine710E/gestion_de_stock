<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\StockController;
use Illuminate\Support\Facades\Route;


Route::middleware("auth")->group(function(){
    Route::resource("categories",CategoryController::class);
    Route::resource("produits",ProduitController::class)->except("update");

    Route::post("produits/{produit}",[ProduitController::class,"update"])->name("produits.update");
    Route::resource("stocks",StockController::class);
});




?>