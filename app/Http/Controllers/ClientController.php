<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::paginate(12);
        return Inertia::render("Client/Index",compact("clients"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Client/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nom' => ['required','string', 'min:3', 'max:30'],
            'prenom' => ['required', 'string', 'min:3', 'max:30'],
            'age' => ['required', 'integer', 'min:18'],
            'adresse' => ['required', 'string', 'min:5', 'max:255'],
            'telephone' => ['required', 'regex:/^(?:\+212|06)[\s-]?\d{8}$/'],
            'fax' => ['nullable', 'regex:/^(?:\+2125|05)[\s-]?\d{8}$/'],
            'societe' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
        ]);

        Client::create($data);
        return redirect()->route("clients.index")->with("success", "client ajouter avec success !");
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        return Inertia::render("Client/Show" , compact("client"));

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        return Inertia::render("Client/Edit", compact('client'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        $data = $request->validate([
            'nom' => ['required','string', 'min:3', 'max:30'],
            'prenom' => ['required', 'string', 'min:3', 'max:30'],
            'age' => ['required', 'integer', 'min:18'],
            'adresse' => ['required', 'string', 'min:5', 'max:255'],
            'telephone' => ['required', 'regex:/^(?:\+212|06)[\s-]?\d{8}$/'],
            'fax' => ['nullable', 'regex:/^(?:\+2125|05)[\s-]?\d{8}$/'],
            'societe' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
        ]);
        $client->update($data);
        return redirect()->route("clients.index")->with("success", "client modifier avec success !");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $client->delete();
        return redirect()->route("clients.index")->with("success", "client supprimer avec success !");

    }
}
