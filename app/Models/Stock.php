<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    /** @use HasFactory<\Database\Factories\StockFactory> */
    use HasFactory;

    protected $fillable = [
        'produit_id',
        "stock_quantite",
        "prix_achat",
        "min_stock",
        "status_stock",
        "operation"
    ];

    const CREATED_AT = "date_achat";
    const UPDATED_AT = "date_utilisation";


}
