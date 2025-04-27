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
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i class="fa-solid fa-list"></i> <span>Category Overview</span>
                </h2>
            }
        >
            <Head title="Category" />

            <main>
                <div className="">
                    <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                        <Link href={route("categories.create")}>
                            <SecondaryButton className=" my-4">
                                <i className="fas fa-plus-circle mr-2"></i> Add
                                Category
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

                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-6">
                            <div className="p-4">
                                <h2 className="text-xl ml-3 mb-4 font-bold">
                                    Category List
                                </h2>
                                <hr className="my-2 border-gray-200" />
                            </div>
                            <div className="p-6 text-gray-900">
                                {categories?.data?.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {categories.data.map((category) => (
                                            <CategoryCard
                                                key={category.id}
                                                category={category}
                                                onDelete={handleDelete}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <h1 className="text-red-500 text-xl">
                                            <i className="fa fa-circle-exclamation mx-2"></i>
                                            Hmm... No categories were found
                                        </h1>
                                    </div>
                                )}

                                {categories.data.length > 0 && (
                                    <div className="mt-12 border-t border-gray-200 pt-6">
                                        <nav className="fle</div>x items-center justify-between px-4">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                {/* Mobile pagination */}
                                                <Link
                                                    href={
                                                        categories.prev_page_url
                                                    }
                                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                                                        !categories.prev_page_url
                                                            ? "text-gray-300 cursor-not-allowed"
                                                            : "text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    Previous
                                                </Link>
                                                <Link
                                                    href={
                                                        categories.next_page_url
                                                    }
                                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                                                        !categories.next_page_url
                                                            ? "text-gray-300 cursor-not-allowed"
                                                            : "text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    Next
                                                </Link>
                                            </div>

                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-700">
                                                        Showing{" "}
                                                        <span className="font-medium">
                                                            {categories.from}
                                                        </span>{" "}
                                                        -{" "}
                                                        <span className="font-medium">
                                                            {categories.to}
                                                        </span>{" "}
                                                        of{" "}
                                                        <span className="font-medium">
                                                            {categories.total}
                                                        </span>{" "}
                                                        results
                                                    </p>
                                                </div>

                                                <div>
                                                    <nav
                                                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                                        aria-label="Pagination"
                                                    >
                                                        {categories.links.map(
                                                            (link, index) => {
                                                                if (
                                                                    link.label.includes(
                                                                        "Previous"
                                                                    )
                                                                ) {
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                index
                                                                            }
                                                                            href={
                                                                                link.url
                                                                            }
                                                                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium ${
                                                                                !link.url
                                                                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                                                    : "bg-white text-gray-500 hover:bg-gray-50"
                                                                            }`}
                                                                        >
                                                                            <span className="sr-only">
                                                                                Previous
                                                                            </span>
                                                                            <i className="fas fa-chevron-left w-5 h-5"></i>
                                                                        </Link>
                                                                    );
                                                                } else if (
                                                                    link.label.includes(
                                                                        "Next"
                                                                    )
                                                                ) {
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                index
                                                                            }
                                                                            href={
                                                                                link.url
                                                                            }
                                                                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium ${
                                                                                !link.url
                                                                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                                                    : "bg-white text-gray-500 hover:bg-gray-50"
                                                                            }`}
                                                                        >
                                                                            <span className="sr-only">
                                                                                Next
                                                                            </span>
                                                                            <i className="fas fa-chevron-right w-5 h-5"></i>
                                                                        </Link>
                                                                    );
                                                                }
                                                                return (
                                                                    <Link
                                                                        key={
                                                                            index
                                                                        }
                                                                        href={
                                                                            link.url
                                                                        }
                                                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                                            link.active
                                                                                ? "z-10 bg-blue-600 text-white border-blue-600"
                                                                                : "bg-white text-gray-500 hover:bg-gray-50"
                                                                        } ${
                                                                            !link.url &&
                                                                            "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                                        }`}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: link.label,
                                                                        }}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    </nav>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default Index;
