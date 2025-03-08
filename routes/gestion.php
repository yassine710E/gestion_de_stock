<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProduitController;
use Illuminate\Support\Facades\Route;


Route::middleware("auth")->group(function(){
    Route::resource("categories",CategoryController::class);
    Route::resource("produits",ProduitController::class);
});


?>