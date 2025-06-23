import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Show({ command, client, products }) {
    console.log(products);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i className="fas fa-folder-open mr-3 text-blue-600"></i>
                    {client.nom}
                </h2>
            }
        >
            <Head title="Commande info" />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div className="p-8">
                        {/* Client Information Card */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations Client</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <span className="text-gray-600 font-medium w-24">Client:</span>
                                    <span className="text-gray-800">{client.nom} {client.prenom}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 font-medium w-24">Email:</span>
                                    <span className="text-gray-800">{client.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 font-medium w-24">Téléphone:</span>
                                    <span className="text-gray-800">{client.telephone}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 font-medium w-24">Date Achat:</span>
                                    <span className="text-gray-800">{command.date_achat}</span>
                                </div>
                            </div>
                        </div>

                        {/* Products Table */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Produits</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Prix Unitaire</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map((product, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-800">{product.nom_produit}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                                                    <img className="w-[70px] rounded" src={`/storage/${product.photo}`} alt="Produit" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center text-gray-800">{product.quantite}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center text-gray-800">{Number(product.prix_vente).toFixed(2)} $</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center text-gray-800">{(product.quantite * product.prix_vente).toFixed(2)} $</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Total Section */}
                        <div className="border-t pt-4">
                            <div className="flex justify-end">
                                <div className="bg-blue-50 rounded-lg px-6 py-4">
                                    <p className="text-lg font-bold text-gray-800">
                                        Total Commande: <span className="text-blue-600">{Number(command.total).toFixed(2)} $</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
