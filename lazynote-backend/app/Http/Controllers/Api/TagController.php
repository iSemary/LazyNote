<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TagController extends Controller {
    public function index() {
        $tags = Tag::OrderBy('id','DESC')->where('user_id', Auth::user()->id)->get();

        if ($tags->isNotEmpty()) {
            return response()->json([
                'status' => 200,
                'tags' => $tags
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'No Tags Found'
            ]);
        }
    }
    public function store(Request $request) {
        $tag = Tag::where('user_id', Auth::user()->id)->where('name', $request->name)->first();

        if ($tag) {
            return response()->json([
                'status' => 401,
                'message' => 'Tag already exist!'
            ]);
        } else {
            $NewTag = Tag::create([
                'user_id' => Auth::user()->id,
                'name' => $request->name
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'Tag Created Successfully',
                'tag'=>$NewTag
            ]);
        }
    }
    public function show(Request $request) {

    }
}
