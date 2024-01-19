<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'password'=> "required|min:4",
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'address' => $request->input('address'),
            'city' => $request->input('city'),
            'password' => $request->input('password'),
        ]);


        return response()->json(['message'=>"User add sucsseful"]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'name'=> "required",
            'password'=> "required|min:4",
        ]);
        $credetials = [
            'name' => $request->input("name"),
            'password' => $request->input("password"),
        ];
        $admin = "admin";
        if (Auth::attempt( $credetials)) {
            return response()->json(['message'=>"authentication sucsseful"]);
        }elseif (Auth::attempt(['email' => $request->input($admin), 'password' => $request->input($admin)])) {
            return response()->json(['message'=>"Welcome Admin to dashboard"]);
        }

        else{
            return response()->json(['message'=>"authentication faild"]);

        }



    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function show()
    {
            return User::all();
    }

}
