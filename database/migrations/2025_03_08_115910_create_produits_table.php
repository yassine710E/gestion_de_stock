<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->string("nom_produit");
            $table->foreignId("category_id")->constrained()->onDelete("restrict");
            $table->decimal("prix_vente",8,2);
            $table->bigInteger("min_stock")->unsigned();
            $table->bigInteger("max_stock")->unsigned();
            $table->string('photo');
            $table->string('code_barre')->unique();
            $table->string("localisation");
            $table->foreignId("fournisseur_id")->constrained()->onDelete("restrict");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
