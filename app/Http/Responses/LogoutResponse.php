<?php

namespace App\Http\Responses;

use Inertia\Inertia;
use Laravel\Fortify\Contracts\LogoutResponse as LogoutResponseContract;

class LogoutResponse implements LogoutResponseContract
{
    /**
     * @param  mixed  $request
     */
    public function toResponse($request)
    {
        return Inertia::location(route('login'));
    }
}