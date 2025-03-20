<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProduitRequest;
use App\Http\Requests\UpdateProduitRequest;
use App\Models\Category;
use App\Models\Produit;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $query = Produit::with('category');
        
        $categories = Category::all();

            if(request("nom_produit")){
                $query->where("nom_produit","like", "%". request("nom_produit"). "%");
            }
            if(request("category_id")){
                $query->where("category_id", request("category_id"));

            }
            if(request("min_prix")){
                $query->where("prix_p", ">=", request("min_prix"))
                      ->orderBy("prix_p");
                
            }
            if(request("max_prix")){
                $query->where("prix_p","<=",  request("max_prix"))
                      ->orderByDesc("prix_p");

            }

           $produits = $query->paginate(8);


        

        return Inertia::render("Produit/Index",compact("produits", "categories"));
    }

    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $categories = Category::all();
        
        return Inertia::render("Produit/Create",compact("categories"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProduitRequest $request)
    {

        $data = $request->validated() ;

            
        
        $image = $request->file("photo");
        
        $path = $image->store("products", "public");
        
        $data['photo'] = $path;

        
        Produit::create($data);
        
        return redirect()->route('produits.index')->with('success', 'Produit créé avec succès');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produit $produit)
    {
        
        return Inertia::render("Produit/Show" , compact("produit"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produit $produit)
    {
        $categories = Category::all();


        return Inertia::render('Produit/Edit',compact("produit","categories"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProduitRequest $request, Produit $produit)
    {
        
       $data =  $request->validated();
        
       if ($request->hasFile('photo')) {
            
            Storage::disk('public')->delete($produit->photo);            
                
            $request->validate([
               
                "photo" => "image|mimes:jpeg,png,jpg|max:2048",
            
            ]);
            
            $image = $request->file("photo");
        
            $path = $image->store("products", "public");
            
        
            $data['photo'] = $path;

        }   

        $produit->fill($data);

        if ($produit->isDirty()) {
            $produit->save();
            return redirect()->route('produits.index')->with("success", "Produit {$data['nom_produit']} modifiée avec succès");

        }
        return redirect()->route('produits.index')->with("info", "Aucune modification détectée.");
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produit $produit)
    {
        
        $produit->delete();

        Storage::disk('public')->delete($produit->photo);
        
        return redirect()->route('produits.index')->with('success', 'Produit supprimer avec succès');
    }
}
