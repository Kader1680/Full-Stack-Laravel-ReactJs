<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::resource('products', ProductsController::class);

// Route::delete('/delete', [ProductsController::class, 'destroy']);
Route::get('/all', [ProductsController::class, 'show']);
Route::get('/all/{id}', [ProductsController::class, 'index']);
Route::post('/create', [ProductsController::class, 'store']);
Route::patch('/product/{id}', [ProductsController::class, 'update']);
Route::delete('/product/{id}', [ProductsController::class, 'destroy']);
