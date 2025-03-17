<?php

namespace Database\Factories;

use App\Models\Produit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stock>
 */
class StockFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'produit_id' => Produit::factory(),
            'stock_quantite' => fake()->numberBetween(1, 100),
            'prix_achat' => fake()->randomFloat(2, 10, 1000),
            'min_stock' => fake()->numberBetween(1, 20),
            'status_stock' => fake()->randomElement(['disponible',"q-faible","non-disponible"]),
            'operation' => fake()->randomElement(["S","E"])
        ];
    }
}
