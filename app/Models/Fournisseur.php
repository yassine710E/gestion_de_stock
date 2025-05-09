<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fournisseur extends Model
{
    use HasFactory;
    protected $guarded = [] ;



    public function produits(){
        return $this->belongsToMany(Produit::class,"ligne_commandes")->withTimestamps();
    }

}
