<?php

namespace App\Http\Controllers;

use App\Http\Requests\LogInRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends controller
{
    public function login(LogInRequest $request)
    {
        $credentials = $request->validated();

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json(Auth::user(), 200);
        }
       
        return response()->json(['error' => 'Unauthorized'], 401);       
    }

    public function me()
    {
        return new JsonResponse([
            'user' => Auth::user()
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}