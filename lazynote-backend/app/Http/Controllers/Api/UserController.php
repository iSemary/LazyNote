<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller {
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'email' => 'required|email|min:3|max:150|unique:users,email',
            'gender' => 'required',
            'password' => 'required|max:150|min:8',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'validation_errors' => $validator->messages()
            ]);
        } else {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'username' => explode('@', $request->input('email'))[0],
                'gender' => $request->input('gender'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

            $token = $user->createToken($user->email . '_TOKEN')->plainTextToken;

            return response()->json([
                'status' => 200,
                'username' => $user->username,
                'token' => $token,
                'message' => 'Account successfully created'
            ]);
        }
    }
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:191',
            'password' => 'required|max:191',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message' => 'The provided credentials are incorrect.'
                ]);
            } else {
                if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                    return response()->json([
                        'status' => 401,
                        'message' => 'Auth Not Wroking!'
                    ]);
                } else {
                    $user = auth()->user();
                    $token = $user->createToken($user->email . '_TOKEN')->plainTextToken;
                    return response()->json([
                        'status' => 200,
                        'token' => $token,
                        'message' => 'Login Successfully'
                    ]);
                }
            }
        }
    }
    public function logout() {
        auth()->user()->currentAccessToken()->delete();
        return response()->json([
            'status' => 200,
        ]);
    }
    public function logout_all() {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
        ]);
    }
}
