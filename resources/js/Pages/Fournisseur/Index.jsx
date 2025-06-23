import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import useFilterForm from "@/hooks/Index";
import Pagination from "@/Components/Pagination";
import NoResults from "@/Components/NoResults";

function Index({ fournisseurs, flash }) {
    const { data, changeHandler, resetFilters, handleDelete, status } =
        useFilterForm({ search: null }, "fournisseurs.index");

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i>
                    <span>Supplier Overview</span>
                </h2>
            }
        >
            <Head title="Suppliers" />

            <main>
                <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                    <Link href={route("fournisseurs.create")}>
                        <SecondaryButton className="mt-4">
                            <i className="fas fa-plus-circle mr-2"></i>Add
                            Supplier
                        </SecondaryButton>
                    </Link>

                    {flash.success && <Success flash={flash} />}
                    {flash.error && <Error flash={flash} />}
                    {flash.info && <Info flash={flash} />}

                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 flex text-gray-900 my-4 items-center bg-white rounded-lg border">
                            <div className="flex-1">
                                <label
                                    htmlFor=""
                                    className="text-black font-medium text-sm"
                                >
                                    Supplier Name:
                                </label>

                                <TextInput
                                    type="text"
                                    name="search"
                                    value={data.search}
                                    onChange={changeHandler}
                                    className="mt-2 block w-full"
                                    placeholder="Nom Complet ..."
                                />
                            </div>
                            <div className={`mt-8 ml-4`} >
                                <button onClick={resetFilters} hidden={status()}>
                                    <DangerButton>Clear</DangerButton>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {fournisseurs?.data ? (
                                fournisseurs.data.map((fourni) => (
                                    <div
                                        key={fourni.id}
                                        className="bg-white rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="space-y-2">
                                                <div className="text-sm text-gray-500 bg-gray-200 rounded-md px-2 py-1 w-12">
                                                    ID: {fourni.id}
                                                </div>
                                                <div className="text-lg font-semibold">
                                                    {fourni.nom_complet}
                                                </div>
                                                <div className="text-gray-600">
                                                    {fourni.email}
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Link
                                                    className="text-blue-600 hover:text-blue-900 p-2 rounded-full"
                                                    href={route(
                                                        "fournisseurs.edit",
                                                        fourni.id
                                                    )}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 rounded-full"
                                                    href={route(
                                                        "fournisseurs.show",
                                                        fourni.id
                                                    )}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                                <form
                                                    onSubmit={(e) =>
                                                        handleDelete(
                                                            e,
                                                            fourni.id
                                                        )
                                                    }
                                                >
                                                    <button
                                                        type="submit"
                                                        className="text-red-600 hover:text-red-900 p-2 rounded-full"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-500 py-4">
                                    <i className="fas fa-inbox mr-2"></i>
                                    Not Found
                                </div>
                            )}
                        </div>

                        {fournisseurs.data.length ? (
                            <Pagination links={fournisseurs.links} />
                        ) : (
                            <NoResults />
                        )}
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default Index;
