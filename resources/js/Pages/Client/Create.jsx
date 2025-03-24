import { useForm, Head, router } from "@inertiajs/react";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Textarea } from "@headlessui/react";
import DangerButton from "@/Components/DangerButton";

function Create({ errors }) {
    const { data, setData, post, processing } = useForm({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        fax: "",
        societe: "",
        adresse: "",
        age: "",
    });

    const cancelHandling = (e) => {
        e.preventDefault();
        router.visit('/clients');
    }
    const formHandling = (e) => {
        e.preventDefault();

        post(route("clients.store"), {
            onSuccess: () => {
                // Clear the form
                setData({
                    nom: "",
                    prenom: "",
                    email: "",
                    telephone: "",
                    fax: "",
                    societe: "",
                    adresse: "",
                    age: "",
                });

                // You can add a success message or redirect here if needed
            },
            // Preserve the scroll position after submission
            preserveScroll: true,
        });
    };

    const changeHandling = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Create Client
                </h2>
            }
        >
            <Head title="Client" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={formHandling}
                                className="grid grid-cols-2 gap-5 p-4"
                            >
                                <div className="col-start-1 flex flex-col space-y-2">
                                    <InputLabel htmlFor="nom_produit">
                                        nom Client
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={data.nom || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter la nom de client"
                                    />
                                    {errors.nom && (
                                        <div className="text-sm text-red-600">
                                            {errors.nom}
                                        </div>
                                    )}
                                </div>

                                <div className="col-start-2 flex flex-col space-y-2">
                                    <InputLabel htmlFor="prenom">
                                        prenom Client
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        value={data.prenom || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter le prenom de client"
                                    />

                                    {errors.prenom && (
                                        <div className="text-sm text-red-600">
                                            {errors.prenom}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="email"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        email
                                    </InputLabel>
                                    <TextInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter email"
                                    />
                                    {errors.email && (
                                        <div className="text-sm text-red-600">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="telephone"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        telephone
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="telephone"
                                        name="telephone"
                                        value={data.telephone || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter la numero de telephone, start with 06 or +212"
                                    />
                                    {errors.telephone && (
                                        <div className="text-sm text-red-600">
                                            {errors.telephone}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="age"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Age
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="age"
                                        name="age"
                                        value={data.age || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter age"
                                    />
                                    {errors.age && (
                                        <div className="text-sm text-red-600">
                                            {errors.age}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="societe"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Societe
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="societe"
                                        name="societe"
                                        value={data.societe || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter la societé"
                                    />
                                    {errors.societe && (
                                        <div className="text-sm text-red-600">
                                            {errors.societe}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="fax"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Fax
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="fax"
                                        name="fax"
                                        value={data.fax || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter Fax, start with 05 or +2125"
                                    />
                                    {errors.fax && (
                                        <div className="text-sm text-red-600">
                                            {errors.fax}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <InputLabel
                                        htmlFor="adresse"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Adresse
                                    </InputLabel>
                                    <Textarea
                                        type="text"
                                        id="adresse"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        name="adresse"
                                        value={data.adresse || ""}
                                        onChange={changeHandling}
                                        placeholder="Enter adresse"
                                    />
                                    {errors.adresse && (
                                        <div className="text-sm text-red-600">
                                            {errors.adresse}
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                        className={`w-full md:w-auto px-4 py-2 col-start-1 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                            processing
                                                ? "opacity-75 cursor-not-allowed"
                                                : ""
                                        }`}
                                    >
                                        {processing
                                            ? "Creating..."
                                            : "Create Produit"}
                                    </PrimaryButton>

                                    <DangerButton
                                        onClick={cancelHandling}
                                        className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 col-start-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                    >
                                    Cancel
                                    </DangerButton>
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
