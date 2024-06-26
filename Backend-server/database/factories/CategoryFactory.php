<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $image = "upload/categories/".$this->faker->numberBetween(1,10).".png";
        return [
            'name' => $this->faker->name(),
            'slug' => $this->faker->unique()->slug(),
            'image' => $image,
            'status' => $this->faker->randomElement(['active','inactive']),
        ];
    }
}
