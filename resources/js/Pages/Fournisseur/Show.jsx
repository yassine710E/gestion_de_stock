import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardCategory from '@/Components/CardCategory';

function Show({ fournisseur }) {

    console.log(fournisseur)

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i><span>{fournisseur.nom_complet}</span>
                </h2>
            }
        >
            <Head title="fournisseur info" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-violet-500 mb-4">fournisseur Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Nom:</span> {fournisseur.nom_complet}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Email:</span> {fournisseur.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Téléphone:</span> {fournisseur.telephone}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Adresse:</span> {fournisseur.address}</p>
                                </div>
                            </div>
                        </div>+
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
                        <div className="mt-4 sm:mt-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-violet-500 mb-4">fournisseur produits</h2>
                            {fournisseur.produits && fournisseur.produits.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4">
                                    {fournisseur.produits.map((produit, index) => (
                                        <CardCategory key={index} produit={produit} />
                                    ))
                                    }
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <h1 className="text-red-500 text-lg sm:text-xl">
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
    )
}

export default Show
