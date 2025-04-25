import { Head } from '@inertiajs/react'
import React, {  useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import useCreateForm from '@/hooks/Create';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import Info from '@/Components/Info';
import Error from '@/Components/Error';
import useFilterForm from '@/hooks/Index';

function Create({ errors, clients, produits, flash, client_id, allLingsCommand }) {
    const [isOpen, setIsOpen] = useState(false);
    const { handleDelete } = useFilterForm({}, "lignes.index");

    const [commandProduits, setCommandProduits] = useState(allLingsCommand)
    const [sum, setSum] = useState(0)


    const toggleModal = () => setIsOpen(!isOpen);
    const closeModal = () => setIsOpen(false);
    const {
        data,
        processing,
        formHandling,
        setData
    } = useCreateForm(
        {
            "client_id": client_id || null,
            "produit_id": null,
            "quantite": null,
        },
        'lignes.store', closeModal);

        const changeSelect = (e) => {
            const { id, value } = e.target;
            setData(data => ({...data, [id]: value}));
        }

        useEffect(() => {
            const filteredProducts = allLingsCommand.filter(ele => ele.client_id == data.client_id);
            setCommandProduits(filteredProducts);
            setSum(filteredProducts.reduce((total, ele) => ele.sous_total + total, 0));
        }, [data.client_id, allLingsCommand]);


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Create Command
                </h2>
            }
        >
            <Head title="Commands" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl overflow-hidden py-20 my-10 bg-white shadow-sm sm:rounded-lg sm:px-6 lg:px-8">
                    {flash.success && (<Success flash={flash} />)}
                    {flash.error && (<Error flash={flash} />)}
                    {flash.info && (<Info flash={flash} />)}

                    <form className="flex items-center space-x-4 my-2" onSubmit={formHandling}>
                        <div className="flex items-center space-x-2">

                            <select
                                className={`w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.client_id ? 'border-red-500' : 'border-gray-300'}`}
                                name="client_id"
                                id="client_id"
                                onChange={changeSelect}
                                value={data.client_id || ""}
                            >
                                <option value=''>---choisir client---</option>
                                {clients.map((client) => (
                                    <option key={client.id} value={client.id}>
                                        {`${client.nom} ${client.prenom}`}
                                    </option>
                                ))}

                            </select>

                            {errors.client_id && <div className="text-sm text-red-600">{errors.client_id}</div>}
                        </div>


                        <PrimaryButton onClick={toggleModal} type="button">
                            choisir le produit
                        </PrimaryButton>

                        {isOpen && (
                            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                                <div className="relative p-4 w-full max-w-md">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        {/* Header */}
                                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                Choisir un produit
                                            </h3>
                                            <button
                                                onClick={closeModal}
                                                type="button"
                                                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                                    />
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>

                                        {/* Body */}
                                        <div className="p-4">
                                            <div className="mb-4">
                                                <InputLabel htmlFor="produit_id">Nom produit</InputLabel>
                                                <select
                                                    onChange={changeSelect}
                                                    name="produit_id"
                                                    id="produit_id"
                                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.produit_id ? "border-red-500" : "border-gray-300"
                                                        }`}
                                                    value={data.produit_id || ""}
                                                >
                                                    <option value="">--- Choisir Produit ---</option>
                                                    {produits.map((produit) => (
                                                        <option key={produit.id} value={produit.id}>
                                                            {`${produit.nom_produit}      ${produit.prix_vente}$`}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.produit_id && <div className="text-sm text-red-600">{errors.produit_id}</div>}

                                            </div>
                                            <div className="mb-4">

                                                <InputLabel htmlFor="quantite" value="stock quantite" />
                                                <TextInput
                                                    id="quantite"
                                                    type="number"
                                                    name="quantite"
                                                    value={data.quantite || ""}
                                                    className="mt-1 block w-full"
                                                    onChange={changeSelect}
                                                    placeholder="quantite produit"

                                                />

                                                {errors.quantite && <div className="text-sm text-red-600">{errors.quantite}</div>}
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex justify-end space-x-2">


                                                <DangerButton
                                                    onClick={closeModal}
                                                >
                                                    annuler
                                                </DangerButton>
                                                <SecondaryButton
                                                    type="submit"
                                                    disabled={processing}
                                                    className={`${processing ? 'opacity-75 cursor-not-allowed' : ''}`}

                                                >
                                                    {processing ? 'Confirmation...' : 'ajouter Ligne de command'}

                                                </SecondaryButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                    </form>


                    <div className="mt-8">
                        <h3 className="text-lg font-bold mb-4">Lignes de commande en attente</h3>
                        <div className="overflow-x-auto">
                            {
                                commandProduits.length > 0 ? (
                                    <table className="min-w-full bg-white border-gray-200 shadow-md border-2 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Photo Produit</th>

                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Nom Produit</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Quantité</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Sous Total</th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {commandProduits.map((ligne, index) => (
                                        <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                                            <td className="px-6 text-center flex justify-center py-4 text-sm text-gray-800">
                                                <img className='w-[70px] rounded' src={`/storage/${ligne.photo}`} alt="" />

                                            </td>


                                            <td className="px-6 py-4 text-sm text-gray-800">{ligne.nom_produit}</td>
                                            <td className="px-6 py-4 text-sm text-gray-800">{ligne.quantite}</td>
                                            <td className="px-6 py-4 text-sm text-gray-800">{ligne.sous_total} $</td>
                                            <td className="px-6 py-4 text-center">
                                                <form onSubmit={(e) => handleDelete(e, ligne.id)}>
                                                    <DangerButton type='submit'>
                                                        Supprimer
                                                    </DangerButton>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="hover:bg-gray-100 transition-colors duration-200 ">
                                        <th colSpan={3} className="px-6 py-3 text-sm text-red-800 text-left">Total Commande</th>
                                        <td className="px-6 py-3 text-sm text-red-800">{sum} $</td>
                                        <td className='text-center'>
                                            <form onSubmit={(e) => handleDelete(e, ligne.id)}>
                                                <input type="hidden" name="client_id" value={client_id} />
                                                <SecondaryButton type='submit' disabled={commandProduits.length == 0}>
                                                    valider commande
                                                </SecondaryButton>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                ) : (
                                    <div className="text-center py-8">
                                    <h1 className="text-red-500 text-lg sm:text-xl">
                                        <i className="fa fa-circle-exclamation mx-2"></i>
                                        pas du Commands
                                    </h1>
                                </div>
                                )
                            }


                        </div>
                    </div>






                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create
