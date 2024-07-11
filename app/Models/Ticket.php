<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function creator() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function admin() {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function reactions() {
        return $this->hasMany(Reaction::class);
    }

    public function notes() {
        return $this->hasMany(Note::class);
    }

    public function status() {
        return $this->belongsTo(Status::class);
    }

    public function categories() {
        return $this->belongsToMany(Category::class, 'tickets_categories');
    }
}