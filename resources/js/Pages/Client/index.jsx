import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";
import ClientCard from "@/Components/ClientCard";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, Head, useForm, router } from "@inertiajs/react";
import { debounce } from "lodash";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";

const Index = ({ clients, flash }) => {
    const { data, setData, get } = useForm({
        nomSearching: "",
        telephoneSearching: "",
        emailSearching: "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            get(route("clients.index"), {
                preserveState: true,
            });
        }, 1000);

        if (
            data.nomSearching !== null ||
            data.telephoneSearching !== null ||
            data.emailSearching !== null
        ) {
            debouncedSearch();
        }

        return () => debouncedSearch.cancel();
    }, [data.nomSearching, data.telephoneSearching, data.emailSearching]);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({ ...prev, [name]: value }));


    };

    const status = () => {
        if (
            data.nomSearching ||
            data.emailSearching ||
            data.telephoneSearching
        ) {
            return false;
        }
        return true;
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Clients
                </h2>
            }
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-12 gap-4 items-center mb-2">
                        <Link
                            href={route("clients.create")}
                            className="text-md col-span-2"
                        >
                            <SecondaryButton className="w-full px-4 py-3 bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out">
                                <i className="fas fa-plus-circle mr-2"></i> Add
                                Client
                            </SecondaryButton>
                        </Link>
                        <form
                            onSubmit={handleSearch}
                            className="relative col-span-10"
                        >
                            <div className="grid grid-cols-12 gap-2">
                                <div className="col-span-4">
                                    <TextInput
                                        type="text"
                                        id="nom"
                                        name="nomSearching"
                                        placeholder="Recherche via le nom"
                                        value={data.nomSearching}
                                        onChange={changeHandler}
                                        className="w-full  pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                    />
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="absolute left-3 top-3 text-gray-500"
                                    />
                                </div>
                                <div
                                 className={`relative col-span-${!status() ? '3' : '4'}`}>
                                    <TextInput
                                        type="text"
                                        id="email"
                                        name="telephoneSearching"
                                        placeholder="Recherche via le phone"
                                        value={data.telephoneSearching}
                                        onChange={changeHandler}
                                        className="w-full  pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                    />
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="absolute left-3 top-3 text-gray-500"
                                    />
                                </div>
                                <div className="relative col-span-4">
                                    <TextInput
                                        type="text"
                                        id="telephone"
                                        name="emailSearching"
                                        placeholder="Recherche via l'email"
                                        value={data.emailSearching}
                                        onChange={changeHandler}
                                        className="w-full  pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                    />
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="absolute left-3 top-3 text-gray-500"
                                    />
                                </div>
                                <DangerButton
                                style={{ display: status() ? 'none' : 'block' }}
                                hidden={status}
                                    onClick={() => {
                                        setData({
                                            nomSearching: "",
                                            emailSearching: "",
                                            telephoneSearching: "",
                                        });
                                    }}
                                    className="absolute top-1 right-1 text-white  bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg"
                                >
                                    x
                                </DangerButton>
                            </div>
                        </form>
                    </div>

                    {flash.success && <Success flash={flash}  />}
                    {flash.error && <Error flash={flash} />}
                    {flash.info && <Info flash={flash} />}

                    <div className="grid grid-cols-4 gap-6 mt-6">
                        {clients?.data?.length > 0 ? (
                            clients.data.map((client) => (
                                <ClientCard
                                    key={client.id}
                                    client={client}
                                    className="col-span-2"
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center">
                                <h1 className="text-red-500 text-xl">
                                    <i className="fa fa-circle-exclamation mx-2"></i>
                                    No results found
                                </h1>
                            </div>
                        )}
                    </div>

                    {clients?.links?.length > 0 && (
                        <div className="mt-8 flex items-center justify-center gap-2">
                            {clients.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ease-in-out ${
                                        link.active
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "bg-white text-gray-700 hover:bg-gray-50 border"
                                    } ${
                                        !link.url &&
                                        "opacity-50 cursor-not-allowed"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
