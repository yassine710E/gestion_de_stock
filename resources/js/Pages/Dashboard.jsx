import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Swal from 'sweetalert2'
import { useEffect } from 'react'

export default function Dashboard({categories, products, fournisseurs, clients, stocks,lowProduct,highProduct}) {
    useEffect(() => {
        if (lowProduct.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'ATTENTION!',
                text: `${lowProduct.length} produits ont une quantité inférieure à stock minimale!!`,
                confirmButtonText: 'Passer',
                confirmButtonColor: '#a4d4ff'
            })
        }
    }, [lowProduct]);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-chart-line"></i> <span>Dashboard Overview</span>
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg">
                        <div className="p-6">
                            <div className="grid md:grid-cols-4 gap-6">
                                <Link href={route('categories.index')} className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total Categories</p>
                                                <h3 className="text-2xl font-bold">{categories}</h3>
                                            </div>
                                            <div className="bg-blue-400 rounded-full p-3">
                                                <i className="fas fa-tags text-white text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href={route('produits.index')} className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total Produits</p>
                                                <h3 className="text-2xl font-bold">{products}</h3>
                                            </div>
                                            <div className="bg-green-400 rounded-full p-3">
                                                <i className="fas fa-box text-white text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href={route('fournisseurs.index')} className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total Fournisseurs</p>
                                                <h3 className="text-2xl font-bold">{fournisseurs}</h3>
                                            </div>
                                            <div className="bg-purple-400 rounded-full p-3">
                                                <i className="fas fa-truck text-white text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href={route('clients.index')} className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total Clients</p>
                                                <h3 className="text-2xl font-bold">{clients}</h3>
                                            </div>
                                            <div className="bg-orange-400 rounded-full p-3">
                                                <i className="fas fa-users text-white text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href={route('stocks.index')} className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total Stocks</p>
                                                <h3 className="text-2xl font-bold">{stocks}</h3>
                                            </div>
                                            <div className="bg-red-400 rounded-full p-3">
                                                <i className="fa-solid fa-arrow-down text-white text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
                            <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center gap-2">
                                <i className="fas fa-exclamation-triangle"></i>
                                Low Stock Products
                            </h3>
                            <div className="space-y-3">
                                {lowProduct.slice(0, 3).map((product, index) => (
                                    <div key={index} className="flex items-center justify-between border-b pb-2">
                                        <span className="font-medium">{product.nom_produit}</span>
                                        <span className="text-red-500">Stock: {product.stock_quantite}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                            <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center gap-2">
                                <i className="fas fa-chart-line"></i>
                                High Stock Products
                            </h3>
                            <div className="space-y-3">
                                {highProduct.slice(0, 3).map((product, index) => (
                                    <div key={index} className="flex items-center justify-between border-b pb-2">
                                        <span className="font-medium">{product.nom_produit}</span>
                                        <span className="text-green-500">Stock: {product.stock_quantite}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
