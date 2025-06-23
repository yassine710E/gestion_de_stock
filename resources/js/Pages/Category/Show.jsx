import React from "react";
import CardCategory from "../../Components/CardCategory";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Show({ category }) {
    console.log(category);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i class="fa-solid fa-list"></i> <span>{category.nom_cat}</span>
                </h2>
            }
        >
            <Head title="Category info" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mt-8 cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                                Products
                            </h2>
                            {category.produits &&
                            category.produits.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.produits.map((produit) => (
                                        <CardCategory produit={produit} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-24">
                                    <h1 className="text-red-500 text-xl ">
                                        {" "}
                                        <i className="fa fa-circle-exclamation mx-2"></i>
                                        pas du Produits
                                    </h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
