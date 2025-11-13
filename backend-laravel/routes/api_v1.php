<?php

use App\Http\Controllers\Api\V1\CarController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Private(Authenticated) Routes
//Route::middleware('auth:sanctum')->apiResource('cars', CarController::class);

Route::middleware(['auth:sanctum', 'role:admin'])->apiResource('cars', CarController::class);

//Public Routes
//Route::get('/carlisting', [CarController::class, 'index']);
