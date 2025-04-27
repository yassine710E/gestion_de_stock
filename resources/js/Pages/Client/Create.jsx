import {  Head } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Textarea } from "@headlessui/react";
import useCreateForm from "@/hooks/Create";

function Create({ errors }) {
    const { data,  processing , formHandling , changeHandling } = useCreateForm({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        fax: "",
        societe: "",
        adresse: "",
        age: "",
    },'clients.store');

 


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open text-black"></i><span>Client Creation</span>
                </h2>
            }
        >
            <Head title="Create Client" />

            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <form onSubmit={formHandling} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Personal Information Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h3>
                                        
                                        <div>
                                            <InputLabel htmlFor="nom" className="text-gray-700">
                                                Full Name
                                            </InputLabel>
                                            <TextInput
                                                type="text"
                                                id="nom"
                                                className="mt-1 block w-full"
                                                value={data.nom || ""}
                                                onChange={changeHandling}
                                                placeholder="Enter client's name"
                                            />
                                            {errors.nom && <div className="text-red-500 text-sm mt-1">{errors.nom}</div>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="prenom" className="text-gray-700">
                                                First Name
                                            </InputLabel>
                                            <TextInput
                                                type="text"
                                                id="prenom"
                                                className="mt-1 block w-full"
                                                value={data.prenom || ""}
                                                onChange={changeHandling}
                                                placeholder="Enter client's first name"
                                            />
                                            {errors.prenom && <div className="text-red-500 text-sm mt-1">{errors.prenom}</div>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="age" className="text-gray-700">
                                                Age
                                            </InputLabel>
                                            <TextInput
                                                type="number"
                                                id="age"
                                                className="mt-1 block w-full"
                                                value={data.age || ""}
                                                onChange={changeHandling}
                                                placeholder="Enter age"
                                            />
                                            {errors.age && <div className="text-red-500 text-sm mt-1">{errors.age}</div>}
                                        </div>
                                    </div>

                                    {/* Contact Information Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h3>
                                        
                                        <div>
                                            <InputLabel htmlFor="email" className="text-gray-700">
                                                Email Address
                                            </InputLabel>
                                            <TextInput
                                                type="email"
                                                id="email"
                                                className="mt-1 block w-full"
                                                value={data.email || ""}
                                                onChange={changeHandling}
                                                placeholder="email@example.com"
                                            />
                                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="telephone" className="text-gray-700">
                                                Phone Number
                                            </InputLabel>
                                            <TextInput
                                                type="tel"
                                                id="telephone"
                                                className="mt-1 block w-full"
                                                value={data.telephone || ""}
                                                onChange={changeHandling}
                                                placeholder="06XXXXXXXX or +212XXXXXXXX"
                                            />
                                            {errors.telephone && <div className="text-red-500 text-sm mt-1">{errors.telephone}</div>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="fax" className="text-gray-700">
                                                Fax Number
                                            </InputLabel>
                                            <TextInput
                                                type="text"
                                                id="fax"
                                                className="mt-1 block w-full"
                                                value={data.fax || ""}
                                                onChange={changeHandling}
                                                placeholder="05XXXXXXXX or +2125XXXXXXX"
                                            />
                                            {errors.fax && <div className="text-red-500 text-sm mt-1">{errors.fax}</div>}
                                        </div>
                                    </div>
                                </div>

                                {/* Company Information Section */}
                                <div className="space-y-4 pt-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Company Information</h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <InputLabel htmlFor="societe" className="text-gray-700">
                                                Company Name
                                            </InputLabel>
                                            <TextInput
                                                type="text"
                                                id="societe"
                                                className="mt-1 block w-full"
                                                value={data.societe || ""}
                                                onChange={changeHandling}
                                                placeholder="Enter company name"
                                            />
                                            {errors.societe && <div className="text-red-500 text-sm mt-1">{errors.societe}</div>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="adresse" className="text-gray-700">
                                                Address
                                            </InputLabel>
                                            <Textarea
                                                id="adresse"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                value={data.adresse || ""}
                                                onChange={changeHandling}
                                                placeholder="Enter complete address"
                                                rows={3}
                                            />
                                            {errors.adresse && <div className="text-red-500 text-sm mt-1">{errors.adresse}</div>}
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="flex items-center justify-end space-x-4 pt-6">

                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                        className={`px-6 py-2 ${processing ? 'opacity-75' : ''}`}
                                    >
                                        {processing ? 'Creating...' : 'Create Client'}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;
