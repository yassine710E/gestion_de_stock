import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function Show({ client }) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open mr-2"></i> <span>{client.nom}</span>
                </h2>
            }
        >
            <Head title="client info" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-violet-500 mb-4">Client Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Nom:</span> {client.nom}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Prénom:</span> {client.prenom}</p>
                                </div>

                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Âge:</span> {client.age}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Email:</span> {client.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Téléphone:</span> {client.telephone}</p>
                                </div>
                                {client.fax && (
                                    <div>
                                        <p className="text-gray-900"><span className="font-bold">Fax:</span> {client.fax}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-gray-900"><span className="font-bold">Adresse:</span> {client.adresse}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Show
