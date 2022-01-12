<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;
use Auth;

class NoteController extends Controller {
    public function index() {
        $notes = Note::OrderBy('updated_at', 'DESC')->where('user_id', Auth::user()->id)->get();
        if ($notes->isNotEmpty()) {
            return response()->json([
                'status' => 200,
                'notes' => $notes,
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => "There's no notes in your account.",
            ]);
        }
    }
    public function store(Request $request) {
        $note = Note::create([
            'user_id' => Auth::user()->id,
            'title' => $request->title,
            'tag_id' => $request->tag_id,
            'body' => $request->body
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Note Created Successfully',
        ]);
    }
    public function public() {
        $notes = Note::OrderBy('updated_at', 'DESC')->where('public', 1)->get();
        if ($notes->isNotEmpty()) {
            return response()->json([
                'status' => 200,
                'notes' => $notes,
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => "There's no public notes till now.",
            ]);
        }
    }
}
