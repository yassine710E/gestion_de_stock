import Info from "@/Components/Info";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import TextInput from "@/Components/TextInput";
import Error from "@/Components/Error";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import DangerButton from "@/Components/DangerButton";
import useFilterForm from "@/hooks/Index";
import CategoryCard from "@/Components/Category/CategoryCard";
import SearchCategory from "@/Components/Category/SearchCategory";
import NoResults from "@/Components/NoResults";
import Pagination from "@/Components/Pagination";

function Index({ categories, flash }) {
    const { data, changeHandler, resetFilters, handleDelete, status } =
        useFilterForm(
            {
                search: null,
            },
            "categories.index"
        );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i class="fa-solid fa-list"></i>{" "}
                    <span>Category Overview</span>
                </h2>
            }
        >
            <Head title="Category" />

            <div className="mx-auto sm:px-6 lg:px-8">
                <Link href={route("categories.create")}>
                    <SecondaryButton className="mt-4">
                        <i className="fas fa-plus-circle mr-2"></i> Add Category
                    </SecondaryButton>
                </Link>
                {flash.success && <Success flash={flash} />}
                {flash.error && <Error flash={flash} />}
                {flash.info && <Info flash={flash} />}

                <SearchCategory
                    data={data}
                    changeHandler={changeHandler}
                    resetFilters={resetFilters}
                    status={status}
                />

                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg border">
                    <div className="p-4">
                        <h2 className="text-xl ml-3 mb-4 font-bold">
                            Category List
                        </h2>
                        <hr className="my-2 border-gray-200" />
                    </div>
                    <div className="p-6 text-gray-900">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {categories.data.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    category={category}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    </div>

                </div>
                        {categories.data.length ? (
                            <Pagination links={categories.links} />
                        ) : (
                            <NoResults />
                        )}
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
