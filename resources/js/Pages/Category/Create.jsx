import { Head } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import useCreateForm from '@/hooks/Create';

function Create({ errors }) {


    const {
        data,
        processing,
        formHandling,
        changeHandling
    } = useCreateForm({"nom_cat": null},'categories.store');



    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Create Category
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

                                    <InputLabel htmlFor="nom_cat" value="nom_cat" />
                                    <TextInput
                                        id="nom_cat"
                                        type="text"
                                        name="nom_cat"
                                        value={data.nom_cat || ""}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={changeHandling}
                                        placeholder="Enter category name"

                                    />

                                    <InputError message={errors.nom_cat} className="mt-2" />
                                </div>

                                <PrimaryButton
                                    className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    disabled={processing}>
                                    {processing ? 'Creating...' : 'Create Category'}
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
