<?php

namespace App\Http\Controllers;

use App\Models\Command;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $commands = Command::paginate(8) ;
        return Inertia::render("Command/Index", compact("commands")) ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Command/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validData = $request->validate([
            "date_achat" => ["required"],
            "date_livraison" => ["required"],
            "date_paiement" => ["required"],
            "total" => ["required"],
            "paye" => ["required"],
            "prix_paye" => []
        ]);

        if($request->paye === "non"){
            $validData["prix_paye"] = 0 ;
        };

        Command::create($validData) ;
        return redirect()->route("commands.index")->with("success", "nouvelle command ajouter avec success !");
    }

    /**
     * Display the specified resource.
     */
    public function show(Command $command)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Command $command)
    {
        return Inertia::render("Command/Edit", compact("command")) ;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Command $command)
    {
        $validData = $request->validate([
            "date_achat" => ["required"],
            "date_livraison" => ["required"],
            "date_paiement" => ["required"],
            "total" => ["required"],
            "paye" => ["required"],
            "prix_paye" => []
        ]);

        if($request->paye === "non"){
            $validData["prix_paye"] = 0 ;
        };

        $command->update($validData);
        return redirect()->route("commands.index")->with("success", " command est modifier avec success !");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Command $command)
    {
        $command->delete() ;
        return redirect()->route("commands.index")->with("success", " command est supprimer avec success !");
    }
}
