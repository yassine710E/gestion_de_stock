import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "../../Components/Card";
import { Link, Head, useForm, router } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Error from "@/Components/Error";
import Info from "@/Components/Info";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Select from "@/Components/Select";
import { debounce } from "lodash";
import DangerButton from "@/Components/DangerButton";

function Index({ produits, flash, categories }) {




    const { data, setData, get } = useForm({
        'nom_produit': null,
        'category_id': null,
        'min_prix': null,
        'max_prix': null,
    })




    useEffect(() => {
        const debouncedSearch = debounce(() => {
            get(route('produits.index'), {
                preserveState: true
            });
        }, 1000);

        if (data.nom_produit !== null || data.category_id !== null || data.min_prix !== null || data.max_prix !== null) {
            debouncedSearch();
        }

        return () => debouncedSearch.cancel();
    }, [data.nom_produit, data.category_id, data.min_prix, data.max_prix])


    const changeHandler = (e) => {

        const { name, value } = e.target;

        setData((prev) => ({ ...prev, [name]: value }))
    }

    const status = () => {
        if (data.nom_produit || data.category_id || data.min_prix || data.max_prix) {
            return false
        }
        return true
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

                    <div className="bg-white rounded-lg shadow-md p-6 my-3 flex justify-between gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full" >
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
                            <button onClick={() => {
                                setData({
                                    nom_produit: "",
                                    category_id: "",
                                    min_prix: "",
                                    max_prix: "",
                                });
                            }}>
                                <DangerButton>X</DangerButton>
                            </button>
                        </div>
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
