<?php

namespace App\Http\Controllers;

use App\Events\LikeEvent;
use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function likeIt(Reply $reply)
    {
        $reply->likes()->create([
            'user_id' => auth()->id()
            //'user_id' => "1"
        ]);

        //broadcast event to everyone except the current user
        broadcast(new LikeEvent($reply->id, 1))->toOthers();
    }

    public function unLikeIt(Reply $reply)
    {
        $reply->likes()->where('user_id', auth()->id())->first()->delete();
        //$reply->like()->where('user_id', '1')->first()->delete();

        broadcast(new LikeEvent($reply->id, 0))->toOthers();
    }
}
