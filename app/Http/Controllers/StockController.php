<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockRequest;
use App\Models\Produit;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stocks = Stock::with("produit")->paginate(10) ;
        return Inertia::render("Stock/Index", compact("stocks"));
    }

    public function create()
    {

        $produits = Produit::whereNotIn('id', Stock::pluck('produit_id'))->get();
        return Inertia::render("Stock/Create", compact("produits"));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StockRequest $request)
    {
        $data = $request->validated();
       
        $data['operation'] = "E";

        Stock::create($data);

        return redirect()->route('stocks.index')->with('success',"Stock créé avec succès");

    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stock $stock)
    {
        //products not exists on stock + stock product 
        $produits = Produit::whereNotIn('id', values: Stock::pluck('produit_id'))->get();
        $produits->push(Produit::find($stock->produit_id));

        $stock->load("produit");
        return Inertia::render("Stock/Edit", compact("stock","produits"));


        



         
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StockRequest $request, Stock $stock)
    {
       $data = $request->validated();
      
       if ($stock->stock_quantite > $data["stock_quantite"]) {
         $data['operation'] = "S";
       }else{
        $data['operation'] = "E";
       }

       $stock->fill($data);

       if ($stock->isClean()) {
        return redirect()->route('stocks.index')->with("info", "Aucune modification détectée.");
       }

       $stock->save();
       return redirect()->route("stocks.index")->with("danger","Stock modifiée avec succès");

             
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock $stock)
    {
        $stock->delete();
        return redirect()->route('stocks.index')->with('success', 'stock supprimer avec succès');

    }
}
