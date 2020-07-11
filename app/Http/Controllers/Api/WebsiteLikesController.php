<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WebsiteLikeResource;
use App\WebsiteLike;
use Illuminate\Http\Request;

class WebsiteLikesController extends Controller
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'likes' => 'required'
        ]);

        $like = WebsiteLike::create($data);

        return new WebsiteLikeResource($like);
    }
}
