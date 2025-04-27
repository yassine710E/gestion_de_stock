<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use Inertia\Inertia;
use App\Models\Client;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Client::query();
            if(request("name")){
                $query->where("nom","like", "%". request("name"). "%")
                ->orWhere("prenom","like", "%". request("name"). "%");
            }
            if(request("email")){
                $query->where("email","like" ,"%".request("email")."%");

            }
            if(request("telephone")){
                $query->where("telephone", "like", "%".request("telephone")."%");
            }

           $clients = $query->orderBy('nom','asc')->paginate(12);
        return Inertia::render("Client/index",compact("clients"));
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
    public function store(ClientRequest $request)
    {
        $data = $request->validated();

        Client::create($data);
        
        return redirect()->route("clients.index")->with("success", "client ajouter avec success !");
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        $commandes = DB::table('commands')
        ->join('ligne_commandes', 'commands.id', '=', 'ligne_commandes.command_id')
        ->where('ligne_commandes.client_id', $client->id)
        ->select('commands.*', 'ligne_commandes.quantite', 'ligne_commandes.sous_total')
        ->get();

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
    public function update(ClientRequest $request, Client $client)
    {
        $data = $request->validated();

        $client->fill($data);

        if ($client->isClean()) {
            return redirect()->route("clients.index")->with("info", "Aucune modification détectée.");

        }

        $client->save();
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
