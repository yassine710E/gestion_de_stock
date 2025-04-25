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
        Schema::create('ligne_commandes', function (Blueprint $table) {
            $table->id();
            $table->foreignId("command_id")->nullable()->constrained("commands")->cascadeOnDelete();
            $table->foreignId("client_id")->constrained("clients")->cascadeOnDelete();
            $table->foreignId("produit_id")->constrained("produits")->cascadeOnDelete();
            $table->decimal("sous_total",10,2);
            $table->bigInteger("quantite");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ligne_commandes');
    }
};
