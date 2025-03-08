import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';

import React from 'react'

function Index({ categories , flash}) {


    
    
    const { data, setData, get, processing } = useForm({
        "search": null,
    })

    const {delete : destroy} = useForm();

    const deleteSubmit = (id,e)=>{
        e.preventDefault();
        if(confirm('are you sure')){
            destroy(route('categories.destroy',id));
        }
    }
    const search = (e) => {
        e.preventDefault();
        get(route('categories.index',{
            onSucess : ()=>setData('search',"")
        }))

    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Category
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-12">

                
                
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route('categories.create')} className="inline-block mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-150 ease-in-out">
                        <i className="fas fa-plus-circle mr-2"></i>Add Category
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
                                    onClick={() => router.get(route('categories.index'))}
                                    className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-150 ease-in-out'
                                >
                                    <i className="fas fa-times mr-2"></i>Cancel
                                </button>
                            </form>
                        </div>
                        
                        <div className="p-6 text-gray-900 ">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom Du Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {categories?.data ? categories.data.map((category) => (
                                        <tr key={category.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{category.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{category.nom_cat}</td>
                                            <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                                <form onSubmit={(e)=>deleteSubmit(category.id,e)} >
                                                  <button type='submit'  className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                    <i className="fas fa-trash"></i>
                                                  </button>
                                                </form>

                                                <Link
                                                    className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                    href={route('categories.edit', category.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                                                    href={route('categories.show', category.id)}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                                <i className="fas fa-inbox mr-2"></i>No Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="mt-4 flex items-center justify-center">
                                {categories.links.map((link, index) => (
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
        </AuthenticatedLayout>
    )
}

export default Index
