<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Fournisseur;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produit>
 */
class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "nom_produit" => fake()->text(25),
            "category_id" => Category::factory(),
            "prix_vente" => fake()->randomFloat(2, 1, 1000),
            "min_stock"=>fake()->numberBetween(10, 20),
            "max_stock"=>fake()->numberBetween(900,1000),
            "photo" => fake()->imageUrl(),
            "code_barre" => fake()->unique()->ean13(),
            "localisation"=>"Block ".fake()->numberBetween(1,10),
        ];
    }
}
