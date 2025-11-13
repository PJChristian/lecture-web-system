<?php

namespace Database\Seeders;

use App\Models\Car;
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
        // User::factory(10)->create();
        /**
         *  User::factory()->create([
         *    'name' => 'Test User',
         *    'email' => 'test@example.com',
         * ]);
         */

        Car::truncate();
        $faker = \Faker\Factory::create();
        $cars = [
            'Toyota' => ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius'],
            'Honda' => ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V'],
            'Ford' => ['Mustang', 'F-150', 'Explorer', 'Escape', 'Focus'],
            'BMW' => ['3 Series', '5 Series', 'X3', 'X5', 'M3'],
            'Mercedes' => ['C-Class', 'E-Class', 'GLC', 'S-Class', 'A-Class'],
            'Audi' => ['A3', 'A4', 'Q5', 'Q7', 'RS5'],
            'Volkswagen' => ['Golf', 'Passat', 'Tiguan', 'Atlas', 'Jetta'],
            'Nissan' => ['Altima', 'Rogue', 'Sentra', 'Maxima', 'Pathfinder']
        ];

        for ($i = 0; $i < 50; $i++) {
            $brand = array_rand($cars);
            Car::create([
                'name' => $brand,
                'model' => $cars[$brand][array_rand($cars[$brand])],
            ]);
        }
    }
}
