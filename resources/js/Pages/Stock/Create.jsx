import { useForm, Head, usePage, Link } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import useCreateForm from '@/hooks/Create';

function Create({ produits, errors }) {

    const { data, processing,formHandling,changeHandling } = useCreateForm({
        'produit_id': "",
        "stock_quantite": "",
        "prix_stock": "",
        "operation": ""
    },"stocks.store");

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i><span>Stocks Creation</span>
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route("stocks.index")}>
                        <DangerButton className='mb-8 gap-4'>
                            <i class="fa-solid fa-arrow-left"></i>
                            <span>annuler</span></DangerButton>
                    </Link>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={formHandling} className="space-y-6">

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="produit_id">
                                        nom produit
                                    </InputLabel>
                                    <select
                                        onChange={changeHandling}
                                        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 `}
                                        name="produit_id"
                                        id="produit_id"
                                    >

                                        <option value=''>---choisir categorie---</option>
                                        
                                        {produits.map((produit) => (
                                            <option value={produit.id}>
                                                {produit.nom_produit}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.produit_id} className="mt-2" />

                                </div>

                                <div className="flex flex-col space-y-2">

                                    <InputLabel htmlFor="stock_quantite" value="stock quantite" />
                                    <TextInput
                                        id="stock_quantite"
                                        type="number"
                                        name="stock_quantite"
                                        value={data.stock_quantite || ""}
                                        className="mt-1 block w-full"
                                        onChange={changeHandling}
                                        placeholder="Enter Stock Quantity"

                                    />

                                    <InputError message={errors.stock_quantite} className="mt-2" />
                                </div>

                                
                                <div className="flex flex-col space-y-2">

                                    <InputLabel htmlFor="prix_stock" value="prix stock" />
                                    <TextInput
                                        id="prix_stock"
                                        type="number"
                                        name="prix_stock"
                                        value={data.prix_stock || ""}
                                        className="mt-1 block w-full"
                                        onChange={changeHandling}
                                        placeholder="Enter Origin Product Price"

                                    />

                                    <InputError message={errors.prix_stock} className="mt-2" />
                                </div>


                                <PrimaryButton
                                    className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    disabled={processing}>
                                    {processing ? 'Creating...' : 'Create Stock'}
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
