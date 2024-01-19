<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\select;
use function Laravel\Prompts\table;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $idProduct = DB::table("products")->find($id);
        return $idProduct;
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
        $products->price = $request->input("price");
        $products->save();
        return response()->json(['message'=>"products add sucsseful"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
            return Products::orderBy('id', 'desc')->get();
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
    public function update(Request $request, Products $products, $id)
    {
        //

        $product = Products::find($id);
        $product->title = $request->input("title");
        $product->price = $request->input("price");
        $product->description = $request->input("description");
        $product->update();

        return response()->json(["message"=>"update succsufuly"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products, $id)
    {

        $product = Products::find($id);
        $product->delete();
        return response()->json(["message"=> "delete with succusfull"]);

        // $products = Products::truncate();
        // if ($products) {

        // }
    }
}
