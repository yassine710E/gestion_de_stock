import { Head } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import useEditForm from '@/hooks/Edit';

function Edit({command, errors }) {


    const {data,processing,formHandling,changeHandling} = useEditForm(
        {
            "date_achat" : command.date_achat,
            "date_livraison" : command.date_livraison,
            "date_paiement" : command.date_paiement,
            "total" : command.total,
            "paye" : command.paye,
            "prix_paye" : command.prix_paye
        },'commands.update', command.id);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Modifier Command
                </h2>
            }
        >
            <Head title="Commands" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={formHandling} className="space-y-6">

                                <div className="flex flex-col space-y-2">

                                    <InputLabel htmlFor="date_achat" value="date_achat :" />
                                    <TextInput
                                        id="date_achat"
                                        type="date"
                                        name="date_achat"
                                        value={data.date_achat || ""}
                                        className="mt-1 block w-full"
                                        onChange={changeHandling}

                                    />

                                    <InputError message={errors.date_achat} className="mt-2" />
                                </div>

                                <div className="flex flex-col space-y-2">

                                    <InputLabel htmlFor="date_livraison" value="date_livraison :" />
                                    <TextInput
                                        id="date_livraison"
                                        type="date"
                                        name="date_livraison"
                                        value={data.date_livraison || ""}
                                        className="mt-1 block w-full"
                                        onChange={changeHandling}

                                    />

                                    <InputError message={errors.date_livraison} className="mt-2" />
                                </div>

                                <div className="flex flex-col space-y-2">

                                    <InputLabel htmlFor="date_paiement" value="date_paiement :" />
                                    <TextInput
                                        id="date_paiement"
                                        type="date"
                                        name="date_paiement"
                                        value={data.date_paiement || ""}
                                        className="mt-1 block w-full"
                                        onChange={changeHandling}

                                    />

                                    <InputError message={errors.date_paiement} className="mt-2" />
                                </div>

                                <div className="flex flex-col space-y-2">

                                    <InputLabel htmlFor="total" value="total :" />
                                    <TextInput
                                        id="total"
                                        type="text"
                                        name="total"
                                        value={data.total || ""}
                                        className="mt-1 block w-full"
                                        onChange={changeHandling}
                                        placeholder="Enter total de command"

                                    />

                                    <InputError message={errors.total} className="mt-2" />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="paye" value="paye :" />
                                    <div className='flex flex-row gap-4'>
                                        <TextInput
                                        id="paye"
                                        type="radio"
                                        name="paye"
                                        value="oui"
                                        className="mt-1 block"
                                        onChange={changeHandling}
                                        checked={data.paye == "oui"}
                                        />
                                        <InputLabel htmlFor="oui" value="OUI" />
                                    </div>
                                    <div className='flex flex-row gap-4'>
                                        <TextInput
                                        id="paye"
                                        type="radio"
                                        name="paye"
                                        value="non"
                                        className="mt-1 block"
                                        onChange={changeHandling}
                                        checked={data.paye == "non"}

                                        />
                                        <InputLabel htmlFor="non" value="NON" />
                                    </div>
                                    <InputError message={errors.paye} className="mt-2" />
                                </div>

                                {
                                    data.paye === "oui" ? (
                                        <div className="flex flex-col space-y-2">

                                            <InputLabel htmlFor="prix_paye" value="prix_paye :" />
                                            <TextInput
                                                id="prix_paye"
                                                type="number"
                                                name="prix_paye"
                                                value={data.prix_paye || ""}
                                                className="mt-1 block w-full"
                                                onChange={changeHandling}
                                                placeholder="Enter prix paye"

                                            />

                                            <InputError message={errors.prix_paye} className="mt-2" />
                                        </div>
                                        ) : null
                                }

                                <PrimaryButton
                                    className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    disabled={processing}>
                                    {processing ? 'Modifying...' : 'Modifier Command'}
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Edit ;
