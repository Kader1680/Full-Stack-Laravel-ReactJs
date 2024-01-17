<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

use function Laravel\Prompts\select;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Products::select('name', 'description');
    }

    public function store(Request $request)
    {
        // validate input data coming from the request
        $request->validate([
            'title'=> "required",
            'description'=> "required",
        ]);

        $products = new Products();
        $products->title = $request->input("title");
        $products->description = $request->input("description");
        $products->save();

        return response()->json(['message'=>"products add sucsseful"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
            return $products::all();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {

        $products = Products::truncate();
        if ($products) {
            return response()->json(["message"=> "delete with succusfull"]);

        }
    }
}
