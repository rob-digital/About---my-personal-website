<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CountLikesResource;
use App\Http\Resources\WebsiteLikeResource;
use App\WebsiteLike;
use Illuminate\Http\Request;

class WebsiteLikesController extends Controller
{
    public function index()
    {
    //    return WebsiteLike::where('likes', 1)->count();
       return CountLikesResource::collection(
        WebsiteLike::all()
       );
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
