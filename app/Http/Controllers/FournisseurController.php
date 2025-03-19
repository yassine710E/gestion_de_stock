<?php

namespace App\Http\Controllers;

use App\Models\Fournisseur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FournisseurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fournisseurs = Fournisseur::paginate(5) ;
        return Inertia::render("Fournisseur/Index", compact("fournisseurs"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Fournisseur/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "nom_complet" => ["required", "min:6"],
            "email" => ["required", "unique:fournisseurs,email"],
            "telephone" => ["required", "unique:fournisseurs,telephone"],
            "address" => ["required"]
        ]) ;

        Fournisseur::create($data) ;
        return redirect()->route("fournisseurs.index")->with("success", "nouvelle fournisseur ajouter avec success !");
    }

    
    public function show(Fournisseur $fournisseur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fournisseur $fournisseur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Fournisseur $fournisseur)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fournisseur $fournisseur)
    {
        //
    }
}
