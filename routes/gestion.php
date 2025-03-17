<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProduitController;
<<<<<<< HEAD
use App\Http\Controllers\ClientController;
=======
use App\Http\Controllers\StockController;
>>>>>>> 2c98ec8f72708ff0e6684b7f7df0094dfefa0407
use Illuminate\Support\Facades\Route;


Route::middleware("auth")->group(function(){
    Route::resource("categories",CategoryController::class);
    Route::resource("produits",ProduitController::class)->except("update");
    Route::post("produits/{produit}",[ProduitController::class,"update"])->name("produits.update");
<<<<<<< HEAD
    Route::resource("clients",ClientController::class);
=======
    Route::resource("stocks",StockController::class);
>>>>>>> 2c98ec8f72708ff0e6684b7f7df0094dfefa0407
});




?>