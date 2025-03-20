<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Client;
use App\Models\Fournisseur;
use App\Models\Produit;
use App\Models\Stock;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::factory(50)->create();
        Produit::factory(50)->create();
        Client::factory(20)->create();
        Stock::factory(20)->create();
        // Fournisseur::factory(20)->create();
    }
}
