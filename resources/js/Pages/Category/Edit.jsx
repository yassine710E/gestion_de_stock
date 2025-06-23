import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import useEditForm from "@/hooks/Edit";

function Edit({ category, errors }) {
    const { data, processing, formHandling, changeHandling } = useEditForm(
        { nom_cat: category.nom_cat },
        "categories.update",
        category.id
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i class="fa-solid fa-list"></i>{" "}
                    <span> Category Customization</span>
                </h2>
            }
        >
            <Head title="Category" />

            <main className="px-4">
                <div className="mx-auto ">
                    <div className="p-6 text-gray-900 overflow-hidden my-4 bg-white rounded-lg">
                        <form onSubmit={formHandling} className="space-y-6">
                            <div className="flex flex-col space-y-2">
                                <label
                                    htmlFor="nom_cat"
                                    className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2"
                                >
                                    Category Name:
                                </label>
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

                                <InputError
                                    message={errors.nom_cat}
                                    className="mt-2"
                                />
                            </div>

                            <PrimaryButton
                                className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                    processing
                                        ? "opacity-75 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={processing}
                            >
                                {processing ? "Updating..." : "update Category"}
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default Edit;
