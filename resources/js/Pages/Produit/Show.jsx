import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Show({ produit }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open text-black"></i>
                    <span>{produit.nom_produit}</span>
                </h2>
            }
        >
            <Head title="Produit info" />

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
                <div className="overflow-hidden bg-white rounded-xl shadow-lg">
                    <div className="p-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Product Details Section */}
                            <div className="space-y-8">
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h3 className="mb-4 text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                                        Product Details
                                    </h3>
                                    <div className="space-y-3">
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                Name:
                                            </span>
                                            <span>{produit.nom_produit}</span>
                                        </p>
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                Price:
                                            </span>
                                            <span className="text-green-600 font-medium">
                                                {produit.prix_vente}$
                                            </span>
                                        </p>
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                Barcode:
                                            </span>
                                            <span className="font-mono">
                                                {produit.code_barre}
                                            </span>
                                        </p>
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                Location:
                                            </span>
                                            <span>{produit.localisation}</span>
                                        </p>
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                created at:
                                            </span>
                                            <span>
                                                {new Date(
                                                    produit.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h3 className="mb-4 text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                                        Stock Information
                                    </h3>
                                    <div className="space-y-3">
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                Minimum Stock:
                                            </span>
                                            <span className="bg-yellow-100 px-3 py-1 rounded-full">
                                                {produit.min_stock}
                                            </span>
                                        </p>
                                        <p className="flex justify-between items-center text-gray-700">
                                            <span className="font-semibold">
                                                Maximum Stock:
                                            </span>
                                            <span className="bg-blue-100 px-3 py-1 rounded-full">
                                                {produit.max_stock}
                                            </span>
                                        </p>
                                        {produit.stock ? (
                                            <>
                                                <p className="flex justify-between items-center text-gray-700">
                                                    <span className="font-semibold">
                                                        Stock Quantite:
                                                    </span>
                                                    <span className="bg-green-100 px-3 py-1 rounded-full">
                                                        {
                                                            produit.stock
                                                                .stock_quantite
                                                        }
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center text-gray-700">
                                                    <span className="font-semibold">
                                                        Date D'achat:
                                                    </span>
                                                    <span className="bg-green-100 px-3 py-1 rounded-full">
                                                        {new Date(
                                                            produit.stock.date_achat
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center text-gray-700">
                                                    <span className="font-semibold">
                                                        Date D'operation:
                                                    </span>
                                                    <span className="bg-green-100 px-3 py-1 rounded-full">
                                                        {new Date(
                                                            produit.stock.date_operation
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center text-gray-700">
                                                    <span className="font-semibold">
                                                        Prix De Stock:
                                                    </span>
                                                    <span className="bg-purple-100 px-3 py-1 rounded-full">
                                                        {
                                                            produit.stock
                                                                .prix_stock
                                                        }
                                                        $
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center text-gray-700">
                                                    <span className="font-semibold">
                                                        dernière opération:
                                                    </span>
                                                    {produit.stock.operation ===
                                                    "S" ? (
                                                        <span className="bg-red-200 px-3 py-1 rounded-full">
                                                            Sortie
                                                        </span>
                                                    ) : (
                                                        <span className="bg-green-200 px-3 py-1 rounded-full">
                                                            entrée
                                                        </span>
                                                    )}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-center text-red-700">
                                                    Outside Of Stock
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Product Image Section */}
                            <div className="flex justify-center items-start">
                                <div className="relative group">
                                    <img
                                        src={`/storage/${produit.photo}`}
                                        alt={produit.nom_produit}
                                        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
