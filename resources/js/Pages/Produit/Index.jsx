import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "../../Components/Card";
import { Link, Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Select from "@/Components/Select";
import DangerButton from "@/Components/DangerButton";
import UseFilterForm from "@/hooks/Index";

function Index({ produits, flash, categories }) {
    const {
        data,
        changeHandler,
        resetFilters,
        status,
        handleDelete
    } = UseFilterForm(
        {
            'nom_produit': null,
            'category_id': null,
            'min_prix': null,
            'max_prix': null,
        },
        'produits.index'
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i><span>Product Overview</span>
                </h2>
            }
        >
            <Head title="Produit" />

<<<<<<< HEAD
            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                    <Link
                        href={route('produits.create')}
                        className="text-md"
                    >
                        <SecondaryButton className=' my-4'>
                            <i className="fas fa-plus-circle mr-2"></i> Add Produit
                        </SecondaryButton>
                    </Link>
=======
            <main className="flex-1 p-6 mt-4 mr-4 mb-4 bg-[#fbfbfb] rounded-lg overflow-auto">
                <div className="">
                    <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                        <Link
                            href={route('produits.create')}
                            className="text-md"
                        >
                            <SecondaryButton className='px-4 py-3 my-4 bg-green-500 hover:bg-green-700'>
                                <i className="fas fa-plus-circle mr-2"></i> Add Produit
                            </SecondaryButton>
                        </Link>
>>>>>>> 2a2f8a4dcb7ccee3efd7ff178f850266a73ecd68

                        {flash.success && <Success flash={flash} />}
                        {flash.error && <Error flash={flash} />}
                        {flash.info && <Info flash={flash} />}

                        <div className="bg-white rounded-lg shadow-md p-6 my-3 flex justify-between gap-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full">
                                <div className="flex flex-col">
                                    <InputLabel className="text-gray-700 font-medium">Nom produit:</InputLabel>
                                    <TextInput
                                        type="text"
                                        name="nom_produit"
                                        value={data.nom_produit}
                                        onChange={changeHandler}
                                        placeholder="Rechercher par nom..."
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <InputLabel className="text-gray-700 font-medium">Catégorie:</InputLabel>
                                    <Select
                                        data={categories}
                                        name="category_id"
                                        method={changeHandler}
                                        currentData={data.category_id}
                                        placeholder="Filtrer par catégorie..."
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <InputLabel className="text-gray-700 font-medium">Prix minimum:</InputLabel>
                                    <TextInput
                                        type="number"
                                        name="min_prix"
                                        value={data.min_prix}
                                        onChange={changeHandler}
                                        placeholder="Prix min..."
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <InputLabel className="text-gray-700 font-medium">Prix maximum:</InputLabel>
                                    <TextInput
                                        type="number"
                                        name="max_prix"
                                        value={data.max_prix}
                                        onChange={changeHandler}
                                        placeholder="Prix max..."
                                    />
                                </div>
                            </div>
                            <div className="mt-6" style={{ display: status() ? 'none' : 'block' }} hidden={status()}>
                                <button onClick={resetFilters}>
                                    <DangerButton>X</DangerButton>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {produits?.data && produits.data.map((produit, index) => (
                                <Card key={index} produit={produit} handleDelete={handleDelete} />
                            ))}
                        </div>

                        {produits.data.length ? (
                            <div className="mt-8 flex items-center justify-center gap-2">
                                {produits?.links.map((link, index) => (
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
                            <div className="text-center py-24">
                                <h1 className="text-red-500 text-xl "> <i className="fa fa-circle-exclamation mx-2"></i>pas du resultas</h1>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default Index;
