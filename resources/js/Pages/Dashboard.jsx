import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({categories, products, fournisseurs, clients, stocks}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 flex items-center gap-2">
                    <i className="fas fa-chart-line"></i> Dashboard Overview
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div className="p-6">
                            <div className="grid md:grid-cols-4 gap-6">

                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md transition-transform hover:scale-105">
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
                                </div>

                                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md transition-transform hover:scale-105">
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
                                </div>

                                {/* Suppliers Card */}
                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md transition-transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total fournisseurs</p>
                                                <h3 className="text-2xl font-bold">{fournisseurs}</h3>
                                            </div>
                                            <div className="bg-purple-400 rounded-full p-3">
                                                <i className="fas fa-truck text-white text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Clients Card */}
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-md transition-transform hover:scale-105">
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
                                </div>
                                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-md transition-transform hover:scale-105">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white">
                                                <p className="text-sm opacity-80">Total stocks</p>
                                                <h3 className="text-2xl font-bold">{stocks}</h3>
                                            </div>
                                            <div className="bg-red-400 rounded-full p-3">
                                            <i class="fa-solid fa-arrow-down text-xl text-white"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
