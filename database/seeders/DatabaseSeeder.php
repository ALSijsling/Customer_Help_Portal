<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Note;
use App\Models\Reaction;
use App\Models\Status;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            StatusSeeder::class
        ]);

        $categories = Category::factory()->count(10)->create();

        User::factory()->count(5)->create(
                    ['is_admin' => true]
                );

        User::factory()->count(25)->create(
                    ['is_admin' => false]
                );

        Ticket::factory()
                ->count(75)
                ->hasAttached($categories)
                ->state(new Sequence(
                    fn (Sequence $sequence) => ['status_id' => Status::all()->random()]
                ))
                ->state(new Sequence(
                    fn (Sequence $sequence) => ['created_by' => User::where('is_admin', false)->get()->random()]
                ))
                ->state(new Sequence(
                    fn (Sequence $sequence) => ['assigned_to' => User::where('is_admin', true)->get()->random()]
                ))
                ->create();

        Reaction::factory()
                ->count(50)
                ->state(new Sequence(
                    fn (Sequence $sequence) => ['user_id' => User::all()->random()]
                ))
                ->state(new Sequence(
                    fn (Sequence $sequence) => ['ticket_id' => Ticket::all()->random()]
                ))
                ->create();
        
        Note::factory()
            ->count(25)
            ->state(new Sequence(
                fn (Sequence $sequence) => ['user_id' => User::where('is_admin', true)->get()->random()]
            ))
            ->state(new Sequence(
                fn (Sequence $sequence) => ['ticket_id' => Ticket::all()->random()]
            ))
            ->create();
    }
}