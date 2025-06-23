import Info from "@/Components/Info";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import TextInput from "@/Components/TextInput";
import Error from "@/Components/Error";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

import React from "react";
import useFilterForm from "@/hooks/Index";
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Pagination from "@/Components/Pagination";
import NoResults from "@/Components/NoResults";

function Index({ commands, flash }) {
    const { data, changeHandler, resetFilters, status, handleDelete } =
        useFilterForm(
            {
                name: null,
                date_debut: null,
                date_fin: null,
            },
            "commands.index"
        );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i className="fas fa-folder-open mr-2"></i>Clients Commands
                </h2>
            }
        >
            <Head title="Commands" />

            <div className="my-4">
                <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                    <Link href={route("commands.create")}>
                        <SecondaryButton className="">
                            <i className="fas fa-plus-circle mr-2"></i> Add
                            command
                        </SecondaryButton>
                    </Link>
                    {flash.success && <Success flash={flash} />}
                    {flash.error && <Error flash={flash} />}
                    {flash.info && <Info flash={flash} />}

                    <div className="bg-white rounded-xl p-6 my-4 border">
                        <div className="flex flex-wrap gap-6 items-start justify-between">
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <InputLabel className="text-gray-700 font-semibold">
                                        Client Name:
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={changeHandler}
                                        placeholder="Search by name..."
                                        className="w-full rounded-lg"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <InputLabel className="text-gray-700 font-semibold">
                                        Starting Date:
                                    </InputLabel>
                                    <TextInput
                                        type="date"
                                        name="date_debut"
                                        value={data.date_debut}
                                        onChange={changeHandler}
                                        className="w-full rounded-lg"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <InputLabel className="text-gray-700 font-semibold">
                                        Ending Date:
                                    </InputLabel>
                                    <TextInput
                                        type="date"
                                        name="date_fin"
                                        value={data.date_fin}
                                        onChange={changeHandler}
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>

                            <div
                                className="mt-7"
                                style={{ display: status() ? "none" : "block" }}
                                hidden={status()}
                            >
                                <button onClick={resetFilters}>
                                    <DangerButton>Clear</DangerButton>
                                </button>
                            </div>
                        </div>
                    </div>

                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg border">
                    <div className="p-4">
                        <h2 className="text-xl ml-3 mb-4 font-bold">
                            Commands List
                        </h2>
                        <hr className=" border-gray-200" />
                    </div>
                    <div className="px-6 text-gray-900">
                        <table className="min-w-full divide-y divide-gray-200 overflow-hidden outline outline-1 outline-gray-200 rounded-lg mb-6">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nom Complet
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        date achat
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        total
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {commands.data.length > 0 &&
                                    commands.data.map((command) => (
                                        <tr
                                            key={command.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {command.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{`${command.client_nom} ${command.client_prenom}`}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {command.date_achat}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {command.total} $
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                                                    href={route(
                                                        "commands.show",
                                                        command.id
                                                    )}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>

                                                <form
                                                    onSubmit={(e) =>
                                                        handleDelete(
                                                            e,
                                                            command.id
                                                        )
                                                    }
                                                >
                                                    <button
                                                        type="submit"
                                                        className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>

                                                <a
                                                    href={route(
                                                        "pdfClientCommande",
                                                        command.id
                                                    )}
                                                    className="text-purple-600 hover:text-purple-900 p-2 hover:bg-purple-100 rounded-full transition duration-150"
                                                    download
                                                >
                                                    <i className="fas fa-file-pdf"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    
                        {commands.data.length ? (
                            <Pagination links={commands.links} />
                        ) : (
                            <NoResults />
                        )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
