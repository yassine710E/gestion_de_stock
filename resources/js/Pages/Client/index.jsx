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
    const {
        data,
        changeHandler,
        resetFilters,
        status,
        handleDelete,
    } = useFilterForm(
        {
            'name': null,
            'telephone': null,
            'email': null,
        },
        'clients.index'
    );
    return (
        <AuthenticatedLayout
            // header={
            //     <h2 className="text-2xl font-bold leading-tight text-gray-800 flex items-center">
            //         <i className="fas fa-folder-open mr-3"></i>Clients
            //     </h2>
            // }
        >
            <Head title="Clients" />

            <main className="flex-1 p-6 mt-4 mr-4 mb-4 bg-[#fbfbfb] rounded-lg overflow-auto">
                <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
                <p>Welcome to the main section! Place your components and content here.</p>

                <div className="py-12 bg-gray-50">
                    <div className="max-w-10xl  mx-auto px-4 sm:px-12 lg:px-8">
                        <div className="flex justify-between items-center mb-6">
                            <Link href={route("clients.create")}>
                                <SecondaryButton className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300 ease-in-out shadow-md">
                                    <i className="fas fa-plus-circle mr-2"></i>
                                    Add Client
                                </SecondaryButton>
                            </Link>
                        </div>

                        {flash.success && <Success flash={flash} />}
                        {flash.error && <Error flash={flash} />}
                        {flash.info && <Info flash={flash} />}

                        <div className="bg-white rounded-xl shadow-lg p-6 my-6">
                            <div className="flex flex-wrap gap-6 items-start justify-between">
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <InputLabel className="text-gray-700 font-semibold">
                                            Full Name:
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
                                            Email:
                                        </InputLabel>
                                        <TextInput
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            onChange={changeHandler}
                                            placeholder="Search by email..."
                                            className="w-full rounded-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <InputLabel className="text-gray-700 font-semibold">
                                            Phone:
                                        </InputLabel>
                                        <TextInput
                                            type="number"
                                            name="telephone"
                                            value={data.telephone}
                                            onChange={changeHandler}
                                            placeholder="Search by phone..."
                                            className="w-full rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="mt-8" style={{ display: status() ? 'none' : 'block' }} hidden={status()}>
                                    <button onClick={resetFilters}>
                                        <DangerButton>X</DangerButton>
                                    </button>
                                </div>


                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
                            {clients?.data?.length > 0 && (
                                clients.data.map((client) => (
                                    <ClientCard
                                        key={client.id}
                                        client={client}
                                        handleDelete={handleDelete}
                                        className="transform hover:scale-105 transition-transform duration-300"
                                    />
                                ))
                            )}
                        </div>

                        {clients.data.length ? (
                            < div className="mt-8 flex items-center justify-center gap-2">
                                {clients?.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ease-in-out ${link.active
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border'
                                            } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center">
                                <h1 className="text-red-500 text-xl "> <i className="fa fa-circle-exclamation mx-2"></i>pas du resultas</h1>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
};

export default Index;
