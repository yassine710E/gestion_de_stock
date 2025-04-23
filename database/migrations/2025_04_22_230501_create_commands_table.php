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
        Schema::create('commands', function (Blueprint $table) {
            $table->id();
            $table->date("date_achat");
            $table->date("date_livraison");
            $table->date("date_paiement");
            $table->enum("paye", ["oui", "non"]);
            $table->decimal("prix_paye", 10,2)->nullable();
            $table->decimal("total", 10,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commands');
    }
};
