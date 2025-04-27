import Info from '@/Components/Info';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import TextInput from '@/Components/TextInput';
import Error from '@/Components/Error';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link} from '@inertiajs/react';

import React from 'react'
import useFilterForm from '@/hooks/Index';
import DangerButton from '@/Components/DangerButton';

function Index({ commands, flash }) {

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
            "commands.index"
        );

console.log(commands);


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Fournisseurs Commands
                </h2>
            }
        >
            <Head title="Commands" />

            <div className="py-12">



                <div className="mx-auto max-w-10xl sm:px-12  lg:px-8">
                    <Link href={route('fourniCommands.create')}>

                        <SecondaryButton className=' my-4'><i className="fas fa-plus-circle mr-2"></i> ajouter command</SecondaryButton>

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
                                placeholder="Nom Complet ..."
                            />
                            <div className={`mt-6`} hidden={status()}>
                                <button onClick={resetFilters}>
                                    <DangerButton>X</DangerButton>

                                </button>
                            </div>

                        </div>
                        <div className="p-6 text-gray-900 ">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nom complet</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">date livraison</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">date paiement</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">total</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {commands?.data ? commands.data.map((command) => (
                                        <tr key={commands.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{command.nom_complet}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{command.date_livraison}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{command.date_paiement}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{command.total}</td>

                                            <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">

                                            <button
                                                className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                // onClick={}
                                            >
                                                <i className="fas fa-save"></i>
                                            </button>
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                                                    href={route('commands.show', command.id)}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>

                                                <form onSubmit={(e) => handleDelete(e,command.id)} >
                                                    <button type='submit'  className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>
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
                                {commands.links.map((link, index) => (
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
