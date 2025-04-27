import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "@/hooks/use-theme";
import { overviewData, recentSalesData, topProducts } from "@/constants";
import { Footer } from "@/layouts/footer";
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";

export default function Dashboard({
    categories,
    products,
    fournisseurs,
    clients,
    stocks,
    lowProduct,
    highProduct,
}) {
    useEffect(() => {
        if (lowProduct.length > 0) {
            Swal.fire({
                icon: "error",
                title: "ATTENTION!",
                text: `${lowProduct.length} produits ont une quantité inférieure à stock minimale!!`,
                confirmButtonText: "Passer",
                confirmButtonColor: "#a4d4ff",
            });
        }
    }, [lowProduct]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <i className="fas fa-chart-line"></i> <span>Dashboard Overview</span>
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex flex-col gap-y-8">

                {/* Main Content */}
                <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Card 1 - Total Products */}
                    <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                <Package size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Total Products
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                                {products}
                            </p>
                            <div className="flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-500 text-blue-600 dark:bg-blue-500/10 dark:border-blue-400 dark:text-blue-400 text-sm font-semibold">
                                <TrendingUp size={18} />
                                25%
                            </div>
                        </div>
                    </div>


                    <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                <DollarSign size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Total Paid Orders
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                                $16,000
                            </p>
                            <div className="flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-500 text-green-600 dark:bg-green-500/10 dark:border-green-400 dark:text-green-400 text-sm font-semibold">
                                <TrendingUp size={18} />
                                12%
                            </div>
                        </div>
                    </div>


                    <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Total Customers
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                                15,400k
                            </p>
                            <div className="flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-500 text-purple-600 dark:bg-purple-500/10 dark:border-purple-400 dark:text-purple-400 text-sm font-semibold">
                                <TrendingUp size={18} />
                                15%
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                <CreditCard size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Sales
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                                12,340
                            </p>
                            <div className="flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-500 text-green-600 dark:bg-green-500/10 dark:border-green-400 dark:text-green-400 text-sm font-semibold">
                                <TrendingUp size={18} />
                                19%
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-7">
                    {/* Overview Section */}
                    <div className="card col-span-1 md:col-span-2 lg:col-span-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <div className="card-header">
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">Overview</p>
                        </div>
                        <div className="card-body p-0">
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart
                                    data={overviewData}
                                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip cursor={false} formatter={(value) => `$${value}`} />
                                    <XAxis dataKey="name" strokeWidth={0} stroke="#475569" tickMargin={6} />
                                    <YAxis dataKey="total" strokeWidth={0} stroke="#475569" tickFormatter={(value) => `$${value}`} tickMargin={6} />
                                    <Area type="monotone" dataKey="total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Sales Section */}
                    <div className="card col-span-1 md:col-span-2 lg:col-span-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <div className="card-header">
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">Recent Sales</p>
                        </div>
                        <div className="card-body h-[300px] overflow-auto p-0">
                            {recentSalesData.map((sale) => (
                                <div key={sale.id} className="flex items-center justify-between gap-x-4 py-2 pr-2">
                                    <div className="flex items-center gap-x-4">
                                        <img src={sale.image} alt={sale.name} className="w-10 h-10 flex-shrink-0 rounded-full object-cover" />
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-medium text-gray-900 dark:text-gray-50">{sale.name}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{sale.email}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-gray-900 dark:text-gray-50">${sale.total}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
