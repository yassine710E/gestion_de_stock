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
import NoResults from "@/Components/NoResults";

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
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
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
                <div className="p-4 bg-white my-4 gap-6 rounded-lg border">
                    <div className="">
                        <h2 className="text-xl ml-3 mb-4 font-bold">
                            Products List
                        </h2>
                        <hr className="my-2 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-6  p-4 rounded-lg">
                        {produits?.data &&
                            produits.data.map((produit, index) => (
                                <Card
                                    key={index}
                                    produit={produit}
                                    handleDelete={handleDelete}
                                />
                            ))}
                    </div>
                </div>
                {produits.data.length ? (
                    <Pagination links={produits.links} />
                ) : (
                    <NoResults />
                )}
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
