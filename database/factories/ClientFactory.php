<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => fake()->firstName(),
            'prenom' => fake()->lastName(),
            'email' => fake()->email(),
            'telephone' => fake()->phoneNumber(),
            'fax' => fake()->number_format(),
            'adresse' => fake()->address(),
            'age' => fake()->numberBetween(18,80),
            'societe' => fake()->company(),
        ];
    }
}
