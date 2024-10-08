<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
Route::get('/logout', [AuthController::class, 'logout']);

Route::post('/login', [AuthController::class, 'login']);