import Info from '@/Components/Info';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import TextInput from '@/Components/TextInput';
import Error from '@/Components/Error';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link} from '@inertiajs/react';
import React from 'react'
import DangerButton from '@/Components/DangerButton';
import useFilterForm from '@/hooks/Index';

function Index({ categories, flash }) {

    const {
        data,
        changeHandler,
        resetFilters,
        handleDelete,
        status
    } = useFilterForm(
        {
            "search": null,
        },
        'categories.index'
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

            <main >            
                <div className="">
                    <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                        <Link href={route('categories.create')}>

<<<<<<< HEAD
                        <SecondaryButton className=' my-4'><i className="fas fa-plus-circle mr-2"></i> Add Category</SecondaryButton>
=======
                            <SecondaryButton className='px-4 py-3 my-4 bg-green-500 hover:bg-green-700'><i className="fas fa-plus-circle mr-2"></i> Add Category</SecondaryButton>
>>>>>>> 2a2f8a4dcb7ccee3efd7ff178f850266a73ecd68

                        </Link>
                        {flash.success && (<Success flash={flash} />)}
                        {flash.error && (<Error flash={flash} />)}
                        {flash.info && (<Info flash={flash} />)}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                            <div className="p-6 text-gray-900 my-3 flex gap-4 items-center">

                                <TextInput
                                    type="text"
                                    name='search'
                                    value={data.search}
                                    onChange={changeHandler}
                                    className=" mt-6 block w-full"
                                    placeholder="Search categories..."
                                />
                                <div className={`mt-6`} hidden={status()}>
                                    <button onClick={resetFilters}>
                                        <DangerButton>X</DangerButton>

                                    </button>
                                </div>

                            </div>

                            <div className="p-6 text-gray-900">
                                {categories?.data?.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {categories.data.map((category) => (
                                            <div 
                                                key={category.id} 
                                                className="relative group"
                                            >
                                                <div
                                                    onClick={() => window.location.href = route('categories.edit', category.id)}
                                                    className="bg-white rounded-md p-4 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-sm border-2 border-gray-100 relative"
                                                >
                                                    <form 
                                                        onSubmit={(e) => handleDelete(e, category.id)} 
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="absolute -right-2 -top-2"
                                                    >
                                                        <button
                                                            type="submit"
                                                            className="bg-red-100 text-red-600 hover:bg-red-200 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition duration-150"
                                                        >
                                                            <i className="fas fa-times text-xs"></i>
                                                        </button>
                                                    </form>
                                                    
                                                    <div className="flex flex-col">
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-black">
                                                            {category.nom_cat}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <h1 className="text-red-500 text-xl">
                                            <i className="fa fa-circle-exclamation mx-2"></i>pas du resultas
                                        </h1>
                                    </div>
                                )}
                                
                                {categories.data.length > 0 && (
                                    <div className="mt-4 flex items-center justify-center">
                                        {categories.links.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                className={`px-3 py-2 mx-1 text-sm font-medium rounded-md ${
                                                    link.active
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                                } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    )
}

export default Index
