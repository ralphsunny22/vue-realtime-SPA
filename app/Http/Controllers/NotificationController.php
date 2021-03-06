<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }


    public function index()
    {
        return [
            'read' => NotificationResource::collection(auth()->user()->readNotifications),
            'unRead' => NotificationResource::collection(auth()->user()->unReadNotifications),
        ];
        // return [
        //     'read' => auth()->user()->readNotifications,
        //     'unRead' => auth()->user()->unReadNotifications,
        // ];
    }


    public function markAsRead(Request $request)
    {
        auth()->user()->notifications->where('id', $request->id)->markAsRead();
    }
}
