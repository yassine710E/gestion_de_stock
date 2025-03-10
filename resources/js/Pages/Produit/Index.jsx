import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "./Card";
import { Link, Head } from "@inertiajs/react";

function Index({ produits, flash }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Produit
                </h2>
            }
        >
            <Head title="Produit" />

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                    <Link 
                        href={route('produits.create')} 
                        className="inline-block mb-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out shadow-md"
                    >
                        <i className="fas fa-plus-circle mr-2"></i>Add Produit
                    </Link>

                    {flash.success && (
                        <div className="mb-6 px-4 py-3 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-sm" role="alert">
                            <span className="block sm:inline">{flash.success}</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                    )}

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {produits?.data && produits.data.map((produit, index) => (
                                <Card key={index} produit={produit}/>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2">
                            {produits.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ease-in-out ${
                                        link.active
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border'
                                    } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
