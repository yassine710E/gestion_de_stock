import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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
import Card from "../../Components/Card";
import FilterProduit from "@/Components/Produit/FilterProduit";
import Pagination from "@/Components/Pagination";

function Index({ produits, flash, categories }) {
    const { data, changeHandler, resetFilters, status, handleDelete } =
        UseFilterForm(
            {
                nom_produit: null,
                category_id: null,
                min_prix: null,
                max_prix: null,
            },
            "produits.index"
        );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open sha"></i>
                    <span>Product Overview</span>
                </h2>
            }
        >
            <Head title="Produit" />

            <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                <Link href={route("produits.create")} className="text-md">
                    <SecondaryButton className="my-4">
                        <i className="fas fa-plus-circle mr-2"></i> Add Produit
                    </SecondaryButton>
                </Link>
                {flash.success && <Success flash={flash} />}
                {flash.error && <Error flash={flash} />}
                {flash.info && <Info flash={flash} />}

                <FilterProduit
                    data={data}
                    changeHandler={changeHandler}
                    resetFilters={resetFilters}
                    status={status}
                    categories={categories}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white p-4 rounded-lg shadow-md">
                    {produits?.data &&
                        produits.data.map((produit, index) => (
                            <Card
                                key={index}
                                produit={produit}
                                handleDelete={handleDelete}
                            />
                        ))}
                </div>

                {produits.data.length ? (
                    <Pagination links={produits.links} />
                ) : (
                    <div className="text-center py-24">
                        <h1 className="text-red-500 text-xl">
                            <i className="fa fa-circle-exclamation mx-2"></i>{" "}
                            Pas de résultats
                        </h1>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
