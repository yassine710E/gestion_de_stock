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
        "prix_p",
        "photo",
        "code_barre"
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
