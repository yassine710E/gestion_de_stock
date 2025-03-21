import Info from '@/Components/Info';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import TextInput from '@/Components/TextInput';
import Error from '@/Components/Error';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

import React from 'react'

function Index({ stocks, flash }) {
// console.log(stocks);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Stocks
                </h2>
            }
        >
            <Head title="Stock" />

            <div className="py-12">



                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route('stocks.create')}>

                        <SecondaryButton className='px-4 py-3 my-4 bg-green-500 hover:bg-green-700'><i className="fas fa-plus-circle mr-2"></i> ajouter stock</SecondaryButton>

                    </Link>
                    {flash.success && (<Success flash={flash} />)}
                    {flash.error && (<Error flash={flash} />)}
                    {flash.info && (<Info flash={flash} />)}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                        {/* <div className="p-6 text-gray-900 my-3 flex gap-4 items-center">

                            <TextInput
                                type="text"
                                name='search'
                                value={data.search}
                                onChange={(e) => setData("search", e.target.value)}
                                className=" mt-6 block w-full"
                                placeholder="Search stocks..."
                            />
                            <div className={`mt-6`} hidden={status()}>
                                <button onClick={()=>{
                                    setData({
                                        "search": "",
                                    })
                                }}>
                                    <DangerButton>X</DangerButton>

                                </button>
                            </div>

                        </div> */}

                        <div className="p-6 text-gray-900 ">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">produit</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">image</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantite</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">prix d'achat</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">min_stock</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">operation</th>
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
                                            <td className="px-6 py-4 whitespace-nowrap">{stock.prix_achat}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{stock.min_stock}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${stock.status_stock === "disponible" ?
                                                                                        'text-green-600' : stock.status_stock === "q-faible" ?
                                                                                        'text-red-600' : 'text-gray-600'}`}>
                                                                                        {stock.status_stock}
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap ${stock.operation === "E" ? "text-green-700" : "text-red-600"}`}>{stock.operation}</td>
                                            <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                                <form>
                                                    <button type='submit' onClick={() => confirm('are you sure !!')} className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>

                                                <Link
                                                    className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                    href={route('stocks.edit', stock.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <Link
                                                    className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                                                    href={route('stocks.show', stock.id)}
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
        </AuthenticatedLayout>
    )
}

export default Index
