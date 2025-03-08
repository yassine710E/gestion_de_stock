import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';

import React from 'react'
import Card from './Card';

function Index({ produits , flash}) {


    console.log(produits)
    
    const { data, setData, get, processing } = useForm({
        "search": null,
    })


    const search = (e) => {
        e.preventDefault();
        get(route('produits.index',{
            onSucess : ()=>setData('search',"")
        }))

    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Produites
                </h2>
            }
        >
            <Head title="produits" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route('produits.create')} className="inline-block mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-150 ease-in-out">
                        <i className="fas fa-plus-circle mr-2"></i>ajouter produit
                    </Link>
                    {flash.success && (
                        <div className="mb-4 px-4 py-3 bg-green-100 border  border-green-400 text-green-700 rounded relative" role="alert">
                            <span className="block sm:inline">{flash.success}</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                    )}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg ">

                    <div className="p-6 text-gray-900 my-3">
                            <form action="" onSubmit={search} className="flex items-center gap-3">
                                <input 
                                    type="text" 
                                    name='search' 
                                    value={data.search} 
                                    onChange={(e) => setData("search", e.target.value)}
                                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Search categories..."
                                />
                                <button 
                                    disabled={processing} 
                                    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition duration-150 ease-in-out'
                                >
                                    <i className="fas fa-search mr-2"></i>Search
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => router.get(route('produits.index'))}
                                    className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-150 ease-in-out'
                                >
                                    <i className="fas fa-times mr-2"></i>Cancel
                                </button>
                            </form>
                        </div>
                        
                        <div className="p-6 text-gray-900">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                {produits?.data && produits.data.map((produit) => (
                                    <Card key={produit.id} produit={produit} />
                                ))}
                            </div>
                            <div className="mt-4 flex items-center justify-center">
                                {produits.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-3 py-2 mx-1 text-sm font-medium rounded-md ${link.active
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                            } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    )
}

export default Index
