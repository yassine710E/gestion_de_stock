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
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId("produit_id")->constrained("produits")->onDelete("cascade");
            $table->bigInteger("stock_quantite");
            $table->timestamp("date_achat")->useCurrent()->nullable();
            $table->timestamp("date_utilisation")->useCurrentOnUpdate()->nullable();
            $table->decimal("prix_achat",8,2);
            $table->integer("min_stock")->default(10);
            $table->enum("status_stock",['disponible',"q-faible","non-disponible"]);
            $table->enum('operation',["S","E"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};
