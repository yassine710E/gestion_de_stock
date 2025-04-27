import { useForm, Head } from '@inertiajs/react'
import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import useCreateForm from '@/hooks/Create';




function Create({errors }) {

    const { data, processing ,formHandling ,changeHandling } = useCreateForm({
        "nom_complet": "",
        "email": "",
        "telephone": "",
        "address": "",
    },'fournisseurs.store');

   
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-user"></i><span>Supplier Creation</span>
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={formHandling} className="space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="nom_produit">
                                        nom complet
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="nom_complet"
                                        name="nom_complet"
                                        value={data.nom_complet || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter nom complet ..."
                                    />
                                    {errors.nom_complet && <div className="text-sm text-red-600">{errors.nom_complet}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="email" className="text-sm font-medium text-gray-700">
                                        email
                                    </InputLabel>
                                    <TextInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter email ..."
                                    />
                                    {errors.email && <div className="text-sm text-red-600">{errors.email}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="telephone" className="text-sm font-medium text-gray-700">
                                        telephone
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="telephone"
                                        name="telephone"
                                        value={data.telephone || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter telephone ..."
                                    />
                                    {errors.telephone && <div className="text-sm text-red-600">{errors.telephone}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="address" className="text-sm font-medium text-gray-700">
                                        address
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={data.address || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter address ..."
                                    />
                                    {errors.address && <div className="text-sm text-red-600">{errors.address}</div>}
                                </div>


                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                    className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Creating...' : 'create fournisseur'}
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create
