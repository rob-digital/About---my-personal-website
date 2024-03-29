<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('contact', 'Api\SubmitFormController@store')->name('send.email');

// Route::post('likes', 'Api\WebsiteLikesController@store')->name('store.likes');

// Route::get('countLikes', 'Api\WebsiteLikesController@index')->name('index.countLikes');

Route::apiResource('websiteLikes', 'Api\WebsiteLikesController')->only(['index', 'store']);
Route::apiResource('uploadImage', 'Api\UploadImageController')->only(['index', 'create', 'store']);
