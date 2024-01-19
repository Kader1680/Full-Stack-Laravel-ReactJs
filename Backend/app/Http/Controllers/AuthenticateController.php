<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthenticateController extends Controller
{
    public function register(Request $request)
    {
        // validate input data coming from the request
        $request->validate([
            'name'=> "required",
            'email'=> "required|email",
            'address'=> "required",
            'city'=> "required",
            'password'=> "required",
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'address' => $request->input('address'),
            'city' => $request->input('city'),
            'password' => $request->input('password'),
        ]);
        // $User = new User();
        // $User->name = $request->input("name");
        // $User->email = $request->input("email");
        // $User->address = $request->input("address");
        // $User->city = $request->input("city");
        // $User->password = Hash::make($request->input("password"));
        $user->save();
        return response()->json(['message'=>"User add sucsseful"]);
    }

    public function show()
    {
            return User::all();
    }

}
