<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getUsers()
    {
        $userList = User::all();

        return response()->json([
            'status_code' => 200,
            'message' => 'OK',
            'data' => $userList
        ], 200);
    }

    public function createUser(Request $request)
    {
        $user = new User;

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));

        $user->save();

        return response()->json([
            'status code' => 201,
            'message' => 'User Created Successfully',
            'data' => $user
        ]);
    }

    public function updateUser(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');

        $user->save();

        return response()->json([
            'status_code' => 200,
            'message' => 'User Updated Successfully',
            'data' => $user
        ]);
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);

        $user->delete($user);

        return response()->json([
            'status_code' => 200,
            'message' => 'User deleted!',
            'data' => $user
        ], 200);
    }
}
