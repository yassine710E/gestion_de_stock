<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    /** @use HasFactory<\Database\Factories\CommandFactory> */
    use HasFactory;

    const CREATED_AT = "date_achat";
    const UPDATED_AT = null;
    protected $guarded = [] ;

}
