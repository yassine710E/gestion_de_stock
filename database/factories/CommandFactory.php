<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Command>
 */
class CommandFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'date_achat'     => $this->faker->date(),
            'date_livraison' => $this->faker->dateTimeBetween('now', '+1 month')->format('Y-m-d'),
            'date_paiement'  => $this->faker->dateTimeBetween('now', '+2 months')->format('Y-m-d'),
            'paye'           => $this->faker->randomElement(['oui', 'non']),
            'prix_paye'      => $this->faker->optional()->randomFloat(2, 100, 1000),
            'total'          => $this->faker->randomFloat(2, 100, 2000),
        ];
    }
}
