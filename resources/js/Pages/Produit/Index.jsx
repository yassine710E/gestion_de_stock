import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "../../Components/Card";
import { Link, Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";

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
                    <SecondaryButton className="bg-green-500 hover:bg-green-700 my-5 py-4 px-6 text-xl">
                        <Link
                        className="text-md"
                            href={route('produits.create')}
                        >
                            <i className="fas fa-plus-circle mr-2"></i>Add Produit
                        </Link>
                    </SecondaryButton>

                    {flash.success && (<Success flash={flash} />)}
                    {flash.error && (<Error flash={flash} />)}
                    {flash.info && (<Info flash={flash} />)}

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {produits?.data && produits.data.map((produit, index) => (
                                <Card key={index} produit={produit} />
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2">
                            {produits.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ease-in-out ${link.active
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
