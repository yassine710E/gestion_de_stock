import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";
import ClientCard from "@/Components/ClientCard";
import React from "react";
import { Link, Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import useFilterForm from "@/hooks/Index";

const Index = ({ clients, flash }) => {
    const { data, changeHandler, resetFilters, status, handleDelete } =
        useFilterForm(
            {
                name: null,
                telephone: null,
                email: null,
            },
            "clients.index"
        );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i>{" "}
                    <span>Clients Overview</span>
                </h2>
            }
        >
            <Head title="Clients" />

            <div className="max-w-10xl mx-auto px-4 sm:px-12 lg:px-8">
                <div className="flex justify-between items-center my-4">
                    <Link href={route("clients.create")}>
                        <SecondaryButton className="mt-">
                            <i className="fas fa-plus-circle mr-2"></i>
                            Add Client
                        </SecondaryButton>
                    </Link>
                </div>

                {flash.success && <Success flash={flash} />}
                {flash.error && <Error flash={flash} />}
                {flash.info && <Info flash={flash} />}

                <div className="bg-white rounded-xl p-6 my-6">
                    <div className="flex flex-wrap gap-6 items-start justify-between">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {["name", "email", "telephone"].map(
                                (field, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <InputLabel className="text-gray-700 font-semibold">
                                            {field.charAt(0).toUpperCase() +
                                                field.slice(1)}
                                            :
                                        </InputLabel>
                                        <TextInput
                                            type={
                                                field === "telephone"
                                                    ? "number"
                                                    : "text"
                                            }
                                            name={field}
                                            value={data[field]}
                                            onChange={changeHandler}
                                            placeholder={`Search by ${field}...`}
                                            className="w-full rounded-lg"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        {!status() && (
                            <div className="mt-8">
                                <button onClick={resetFilters}>
                                    <DangerButton>X</DangerButton>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
                    {clients?.data?.length > 0 ? (
                        clients.data.map((client) => (
                            <ClientCard
                                key={client.id}
                                client={client}
                                handleDelete={handleDelete}
                                className="transform hover:scale-105 transition-transform duration-300"
                            />
                        ))
                    ) : (
                        <div className="text-center">
                            <h1 className="text-red-500 text-xl">
                                <i className="fa fa-circle-exclamation mx-2"></i>
                                Pas de résultats
                            </h1>
                        </div>
                    )}
                </div>

                {clients?.data?.length > 0 && (
                    <div className="mt-8 flex items-center justify-center gap-2">
                        {clients?.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ease-in-out ${
                                    link.active
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "bg-white text-gray-700 hover:bg-gray-50 border"
                                } ${
                                    !link.url && "opacity-50 cursor-not-allowed"
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
