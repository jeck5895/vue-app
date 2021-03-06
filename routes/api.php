<?php

use Illuminate\Http\Request;

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
/*
* This can be refactor to Route::resource('projects', 'ProjectsController@index');
*Route::get('projects', 'ProjectsController@index');
*Route::post('projects', 'ProjectsController@store');
*/

Route::group(['middleware' => 'auth:api'], function(){
    // here is where you can put protected uri's 
    Route::resource('projects','ProjectsController');
});
Route::get('projects', 'ProjectsController@index');

