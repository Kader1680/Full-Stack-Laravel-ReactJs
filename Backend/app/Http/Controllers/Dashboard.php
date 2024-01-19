<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    public function getDataDashboard(){

        $allUser = User::all();
        // $count = Products::all()->count();
        // $all = [$allUser, $count];
        return  $allUser;

    }
    public function count(){

        // $count = Products::all()->count();
        $productsCount = Products::all()->count();

        return  $productsCount;

    }

    public function countClient(){

        // $count = Products::all()->count();
        $usersCount = User::all()->count();

        return  $usersCount;

    }


    public function heightPrice(){

        // $count = Products::all()->count();
        $max = Products::max("price");

        return  $max;

    }

    public function lowPrice(){

        // $count = Products::all()->count();
        $min = Products::min("price");

        return  $min;

    }
}
