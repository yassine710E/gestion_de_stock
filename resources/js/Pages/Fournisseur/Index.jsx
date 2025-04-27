import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import Error from '@/Components/Error';
import Info from '@/Components/Info';
import TextInput from '@/Components/TextInput';
import DangerButton from '@/Components/DangerButton';
import useFilterForm from '@/hooks/Index';

function Index({ fournisseurs, flash }) {
    const { data, changeHandler, resetFilters, handleDelete, status } = useFilterForm(
        { search: null },
        'fournisseurs.index'
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i><span>Supplier Overview</span>
                </h2>
            }
        >
            <Head title="Fournisseurs" />

            <main className="flex-1 p-6 mt-4 mr-4 mb-4 bg-[#fbfbfb] rounded-lg overflow-auto">
                <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                    <Link href={route('fournisseurs.create')}>
                        <SecondaryButton className='my-4  '>
                            <i className="fas fa-plus-circle mr-2"></i>Ajouter Fournisseurs
                        </SecondaryButton>
                    </Link>

                    {flash.success && <Success flash={flash} />}
                    {flash.error && <Error flash={flash} />}
                    {flash.info && <Info flash={flash} />}

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 my-3 flex gap-4 items-center">

                            <TextInput
                                type="text"
                                name="search"
                                value={data.search}
                                onChange={changeHandler}
                                className="mt-6 block w-full"
                                placeholder="Nom Complet ..."
                            />
                            <div className={`mt-6`} hidden={status()}>
                                <button onClick={resetFilters}>
                                    <DangerButton>X</DangerButton>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 text-gray-900">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom Complet</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {fournisseurs?.data ? fournisseurs.data.map((fourni) => (
                                        <tr key={fourni.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">{fourni.id}</td>
                                            <td className="px-6 py-4">{fourni.nom_complet}</td>
                                            <td className="px-6 py-4">{fourni.email}</td>
                                            <td className="px-6 py-4 flex gap-3">
                                                <Link
                                                    className="text-blue-600 hover:text-blue-900 p-2 rounded-full"
                                                    href={route('fournisseurs.edit', fourni.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 rounded-full"
                                                    href={route('fournisseurs.show', fourni.id)}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                                <form onSubmit={(e) => handleDelete(e, fourni.id)}>
                                                    <button type="submit" className="text-red-600 hover:text-red-900 p-2 rounded-full">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
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
                                        className={`px-3 py-2 mx-1 text-sm font-medium rounded-md ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

export default Index;
