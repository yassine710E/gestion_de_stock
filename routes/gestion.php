<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommandController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\StockController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', "verified"])->group(function () {
    Route::resource("categories", CategoryController::class);
    Route::resource("produits", ProduitController::class)->except("update");
    Route::post("produits/{produit}", [ProduitController::class, "update"])->name("produits.update");
    Route::resource("clients", ClientController::class);
    Route::resource("stocks", StockController::class)->except("show");
    Route::resource("fournisseurs", FournisseurController::class);
    Route::resource("commands", CommandController::class);
});
