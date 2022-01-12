<?php

use App\Http\Controllers\Api\NoteController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('/logout/all', [UserController::class, 'logout_all'])->middleware('auth:sanctum');

    Route::get('/tags', [TagController::class, 'index']);
    Route::post('/tags/store', [TagController::class, 'store']);
    // Route::get('/tags/{id}', [TagController::class, 'show']);
    Route::post('/tags/update', [TagController::class, 'update']);
    Route::post('/tags/destroy', [TagController::class, 'destroy']);


    Route::get('/notes', [NoteController::class, 'index']);
    Route::post('/notes/store', [NoteController::class, 'store']);
    // Route::get('/notes/{id}', [NoteController::class, 'show']);
    Route::post('/notes/update', [NoteController::class, 'update']);
    Route::post('/notes/destroy', [NoteController::class, 'destroy']);
});
Route::get('/notes/public', [NoteController::class, 'public']);
