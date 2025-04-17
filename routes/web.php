<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\StockController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FournisseurController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', DashboardController::class)
    ->middleware(['auth'])->name('dashboard');

// Route::get('/category', [CategoryController::class, 'index'])
//     ->middleware(['auth', 'verified'])->name('category');

// Route::get('/products', [ProduitController::class, 'index'])
//     ->middleware(['auth', 'verified'])->name('products');

// Route::get('/clients', [ClientController::class, 'index'])
//     ->middleware(['auth', 'verified'])->name('clients');

// Route::get('/fournisseur', [FournisseurController::class, 'index'])
//     ->middleware(['auth', 'verified'])->name('fournisseur');

// Route::get('/stock', [StockController::class, 'index'])
//     ->middleware(['auth', 'verified'])->name('stock');

    
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ERROR 404
Route::fallback(function () {
    return inertia('Errors/404');
});


require __DIR__ . '/auth.php';

require __DIR__ . '/gestion.php';

