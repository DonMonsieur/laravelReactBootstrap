<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getUsers()
    {
        $userList = User::orderBy('id', 'asc')
            ->get();

        return response()->json([
            'status_code' => 200,
            'message' => 'OK',
            'data' => $userList
        ], 200);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        return response()->json([
            'user' => $user
        ]);
    }


    public function createUser(CreateUserRequest $request)
    {
        $validatedUser = $request->validated();
        $validatedUser['password'] = bcrypt($validatedUser['password']);

        $user = User::create($validatedUser);

        return response()->json([
            'status code' => 201,
            'message' => 'User Created Successfully',
            'data' => $user
        ]);
    }

    public function updateUser(UpdateUserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $validatedUser = $request->validated();
        $validatedUser['password'] = bcrypt($validatedUser['password']);

        $user->update($validatedUser);

        return response()->json([
            'status_code' => 200,
            'message' => 'User Updated Successfully',
            'data' => $user
        ]);
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response()->json([
            'status_code' => 200,
            'message' => 'User deleted!',
            'data' => $user
        ], 200);
    }
}
