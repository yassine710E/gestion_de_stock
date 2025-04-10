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
        "localisation"
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function stock(){
        return $this->hasOne(Stock::class);
    }
}
