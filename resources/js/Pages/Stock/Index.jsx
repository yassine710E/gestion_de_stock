import Info from '@/Components/Info';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import Error from '@/Components/Error';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react'
import useFilterForm from '@/hooks/Index';
import Badge from '@/Components/Badge';



function Index({ stocks, flash }) {


    const { handleDelete } = useFilterForm({}, "stocks.index");



    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-folder-open"></i><span>Stocks Overview</span>
                </h2>
            }
        >
            <Head title="Stock" />

            <main className="flex-1 p-6 mt-4 mr-4 mb-4 bg-[#fbfbfb] rounded-lg overflow-auto">
                <div className="">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <Link href={route('stocks.create')}>

                            <SecondaryButton className='px-4 py-3 my-4 bg-green-500 hover:bg-green-700'><i className="fas fa-plus-circle mr-2"></i> ajouter stock</SecondaryButton>

                        </Link>
                        {flash.success && (<Success flash={flash} />)}
                        {flash.error && (<Error flash={flash} />)}
                        {flash.info && (<Info flash={flash} />)}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">


<<<<<<< HEAD


                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route('stocks.create')}>

                        <SecondaryButton className=' my-4 '><i className="fas fa-plus-circle mr-2"></i> ajouter stock</SecondaryButton>

                    </Link>
                    {flash.success && (<Success flash={flash} />)}
                    {flash.error && (<Error flash={flash} />)}
                    {flash.info && (<Info flash={flash} />)}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">


                        <div className="p-6 text-gray-900 ">
                            <table className="min-w-full divide-y divide-gra</table>y-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">produit</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">image</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantite</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">operation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">localisation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {stocks?.data ? stocks.data.map((stock) => (
                                        <tr key={stock.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{stock.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{stock.produit.nom_produit}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img className='w-[70px] rounded' src={`/storage/${stock.produit.photo}`} alt="" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{stock.stock_quantite}</td>


                                            <td className="px-6 py-4 hitespace-nowrap">
                                                <Badge color={stock.operation === "E" ? "green" : "red"}>
                                                    {stock.operation === "E" ? "Entrée" : "Sortie"}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{stock.produit.localisation}</td>

                                            <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                                <form onSubmit={(e) => handleDelete(e, stock.id)} >
                                                    <button type='submit' className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>

                                                <Link
                                                    className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                    href={route('stocks.edit', stock.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                            </td>
                                        </tr>
                                    )) : (
=======
                            <div className="p-6 text-gray-900 ">
                                <table className="min-w-full divide-y divide-gra</table>y-200">
                                    <thead className="bg-gray-50">
>>>>>>> 2a2f8a4dcb7ccee3efd7ff178f850266a73ecd68
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">produit</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">image</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantite</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">operation</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">localisation</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {stocks?.data ? stocks.data.map((stock) => (
                                            <tr key={stock.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">{stock.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{stock.produit.nom_produit}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <img className='w-[70px] rounded' src={`/storage/${stock.produit.photo}`} alt="" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">{stock.stock_quantite}</td>


                                                <td className="px-6 py-4 hitespace-nowrap">
                                                    <Badge color={stock.operation === "E" ? "green" : "red"}>
                                                        {stock.operation === "E" ? "Entrée" : "Sortie"}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">{stock.produit.localisation}</td>

                                                <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                                    <form onSubmit={(e) => handleDelete(e, stock.id)} >
                                                        <button type='submit' className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </form>

                                                    <Link
                                                        className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                        href={route('stocks.edit', stock.id)}
                                                    >
                                                        <i className="fas fa-edit"></i>
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
                                    {stocks.links.map((link, index) => (
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
            </main>
        </AuthenticatedLayout>
    )
}

export default Index
