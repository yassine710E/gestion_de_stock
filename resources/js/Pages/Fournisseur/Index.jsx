import Info from '@/Components/Info';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import TextInput from '@/Components/TextInput';
import Error from '@/Components/Error';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

import React from 'react'

function Index({ fournisseurs, flash }) {


    const {delete:destroy} = useForm();

    const deleteSubmit = (id, e) => {
        e.preventDefault();
        destroy(route('fournisseurs.destroy', id))
    }

    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>fournisseurs
                </h2>
            }
        >
            <Head title="fournisseurs" />

            <div className="py-12">



                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route('fournisseurs.create')}>

                        <SecondaryButton className='px-4 py-3 my-4 bg-green-500 hover:bg-green-700'><i className="fas fa-plus-circle mr-2"></i> ajouter fournisseurs</SecondaryButton>

                    </Link>
                    {flash.success && (<Success flash={flash} />)}
                    {flash.error && (<Error flash={flash} />)}
                    {flash.info && (<Info flash={flash} />)}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                        <div className="p-6 text-gray-900 ">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nom complet</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">telephone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">address</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {fournisseurs?.data ? fournisseurs.data.map((fourni) => (
                                        <tr key={fournisseurs.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{fourni.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{fourni.nom_complet}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{fourni.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{fourni.telephone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{fourni.address}</td>

                                            <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                            <form onSubmit={(e) => deleteSubmit(fourni.id, e)} >
                                                    <button type='submit' onClick={() => confirm('are you sure !!')} className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>

                                                <Link
                                                    className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                    href={route('fournisseurs.edit', fourni.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                                                    href={route('fournisseurs.show', fourni.id)}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                                <i className="fas fa-inbox mr-2"></i>Not Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="mt-4 flex items-center justify-center">
                                {fournisseurs.links.map((link, index) => (
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
