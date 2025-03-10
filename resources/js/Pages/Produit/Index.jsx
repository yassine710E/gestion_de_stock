import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "../../Components/Card";
import { Link, Head, useForm, router } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Select from "@/Components/Select";

function Index({ produits, flash, categories }) {

    const { data, setData, processing, get } = useForm({
        'nom_produit' : '',
        'category_id' : '',
        'min_prix' : '',
        'max_prix' : '',
    })

    console.log(produits)

    const changeHandler  = (e) => {
        const {name, value} = e.target;

        setData((prev) => ({...prev, [name] : value}))
    }

    const Search = () => {
        get(route("produits.index"))
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Produit
                </h2>
            }
        >
            <Head title="Produit" />

            <div className="py-12 bg-gray-50">
                <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                    <SecondaryButton className="bg-green-500 hover:bg-green-700 my-5 py-4 px-6 text-xl">
                        <Link
                        className="text-md"
                            href={route('produits.create')}
                        >
                            <i className="fas fa-plus-circle mr-2"></i>Add Produit
                        </Link>
                    </SecondaryButton>

                    {flash.success && (<Success flash={flash} />)}
                    {flash.error && (<Error flash={flash} />)}
                    {flash.info && (<Info flash={flash} />)}

                    <div className="bg-white rounded-lg shadow-md p-6 my-3">
                        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center" onSubmit={Search}>
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
                                    onChange={changeHandler}                                    
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
                            
                            <div className="flex gap-2 mt-4 lg:col-span-4">
                                <PrimaryButton
                                    disabled={processing}
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition duration-150 ease-in-out"
                                >
                                    <i className="fas fa-search mr-2"></i>{processing ? 'Searching...' : 'Search'}
                                </PrimaryButton>
                                <DangerButton
                                    type="button"
                                    onClick={() => get(route('produits.index'))}
                                    className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-150 ease-in-out"
                                >
                                    <i className="fas fa-times mr-2"></i>Annuler
                                </DangerButton>
                            </div>
                        </form>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {produits?.data && produits.data.map((produit, index) => (
                                <Card key={index} produit={produit} />
                            ))}
                        </div>

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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
