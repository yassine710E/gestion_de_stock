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
import NoResults from "@/Components/NoResults";
import Pagination from "@/Components/Pagination";

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
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
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

                <div className="bg-white rounded-xl p-6 my-4 border">
                    <div className="flex flex-wrap gap-6 items-start justify-between">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    label: "Client Name",
                                    name: "name",
                                    type: "text",
                                },
                                {
                                    label: "Client Email",
                                    name: "email",
                                    type: "text",
                                },
                                {
                                    label: "Client Phone",
                                    name: "telephone",
                                    type: "text",
                                },
                            ].map((field, idx) => (
                                <div key={idx} className="space-y-2">
                                    <InputLabel className="text-gray-700 font-semibold">
                                        {field.label}:
                                    </InputLabel>
                                    <TextInput
                                        type={field.type}
                                        name={field.name}
                                        value={data[field.name] || ""}
                                        onChange={changeHandler}
                                        placeholder={`Search by ${field.label.toLowerCase()}...`}
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                        {!status() && (
                            <div className="mt-7">
                                <button onClick={resetFilters}>
                                    <DangerButton>Clear</DangerButton>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {clients.data.map((client) => (
                        <ClientCard
                            key={client.id}
                            client={client}
                            handleDelete={handleDelete}
                            className="transform hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
                {clients.data.length ? (
                    <Pagination links={clients.links} />
                ) : (
                    <NoResults />
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
