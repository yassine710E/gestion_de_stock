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
            $table->timestamp("date_achat")->useCurrent();
            $table->date("date_livraison")->nullable();
            $table->date("date_paiement")->nullable();
            $table->enum("paye", ["oui", "non"])->default("non");
            $table->decimal("prix_paye", 10,2)->nullable();
            $table->decimal("total", 10,2)->nullable();
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
