<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     
     * get all data from category tabel 
     * return the view with data

     */
    public function index()
    {
        if (request("search")) {
            $categories = Category::where('nom_cat',"like","%".request("search")."%")->paginate(10);
        } else {
            $categories = Category::paginate(10);
        }
         
        return Inertia::render("Category/Index",["categories"=>$categories]);

    }

    /**
     * return the view of create a category 
     */
    public function create()
    {
         return Inertia::render("Category/Create");
    }

    /**
     * validate form of category
     * store data of category 
     */
    public function store()
    {
       $category =  request()->validate([
            "nom_cat"=>['required'],
        ]);
        
        Category::create($category);

        return redirect()->route('categories.index')->with("success","nouvelle catégorie ajoutée avec succès");
    }

    /**
     * Display view of single category and its products
     */
    public function show(Category $category)
    {
        return Inertia::render("Category/Show",['category'=>$category]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return Inertia::render("Category/Edit",['category'=>$category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Category $category)
    {
        $data =  request()->validate([
            "nom_cat"=>['required'],
        ]);

        $category->update($data);

        return redirect()->route('categories.index')->with("success","catégorie {$data['nom_cat']} modifiée avec succès");

        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {

        
        $category->delete();

        return redirect()->route('categories.index')->with("success","catégorie supprimee avec succès"); 
    }
}
