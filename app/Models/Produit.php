<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;

    protected $table = "produits";


    protected $fillable = [
        "category_id",
        "nom_produit",
        "prix_vente",
        "min_stock",
        "max_stock",
        "photo",
        "code_barre",
        "localisation",
        "fournisseur_id"
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function stock(){
        return $this->hasOne(Stock::class);
    }

    public function fournisseur(){
        return $this->belongsTo(Fournisseur::class);
    }

    public function clients(){
        return $this->belongsToMany(Client::class,"ligne_commandes")->withTimestamps();
    }
}
