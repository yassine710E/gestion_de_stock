import React from 'react'
import CardCategory from './CardCategory';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function Show({ category }) {
    console.log(category);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>{category.nom_cat}
                </h2>
            }
        >
            <Head title="Category info" />

            <div className="py-12">

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
         

                    <div className="bg-white shadow-md rounded-lg p-6">

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Products</h2>
                            {category.produits && category.produits.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.produits.map((produit) => (

                                        <CardCategory produit={produit} />

                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">No products found in this category.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Show
