<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Mail\SubmitContactForm;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;

class SubmitFormController extends Controller
{
    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name'    => 'required|string',
            'email'   => 'required|email',
            'message' => 'required',
        ]);


        Mail::to( config('mail.from.address') )->send( new SubmitContactForm($request->only(['name', 'email', 'message'])) );
        return response()->json( ['sent' => true], Response::HTTP_OK);

        }
}
