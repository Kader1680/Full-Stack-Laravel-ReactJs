<?php

use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\Authentication;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Dashboard;
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

Route::post('/register', [AuthenticateController::class, 'register']);
Route::post('/login', [AuthenticateController::class, 'login']);
Route::post('/logout', [AuthenticateController::class, 'logout']);
Route::get('/user', [AuthenticateController::class, 'show']);
Route::get('/dashboard', [Dashboard::class, 'getDataDashboard']);
Route::get('/dashboard/count', [Dashboard::class, 'count']);
Route::get('/dashboard/countClient', [Dashboard::class, 'countClient']);
Route::get('/dashboard/max', [Dashboard::class, 'heightPrice']);
Route::get('/dashboard/min', [Dashboard::class, 'lowPrice']);
// Route::get('/dashboard', [Dashboard::class, 'count']);
// Route::get('/user', [AuthenticateController::class, 'show']);
