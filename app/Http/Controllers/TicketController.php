<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user['is_admin'] === 1) {
            $tickets = Ticket::orderBy('created_at')->with('creator')->with('admin')->with('status')->with('categories')->get();
        }
        else {
            $tickets = Ticket::where('created_by', $user['id'])->orderBy('created_at')->with('creator')->with('admin')->with('status')->with('categories')->get();
        }
        
        return response()->json($tickets);
    }

    public function create()
    {
        //
    }

    public function store(StoreTicketRequest $request)
    {
        //
    }

    public function show(Ticket $ticket)
    {
        //
    }

    public function edit(Ticket $ticket)
    {
        //
    }

    public function update(UpdateTicketRequest $request, Ticket $ticket)
    {
        //
    }

    public function destroy(Ticket $ticket)
    {
        //
    }
}