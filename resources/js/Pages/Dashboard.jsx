import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
import { overviewData, recentSalesData } from "@/constants";
import { CreditCard, DollarSign, Package, Users } from "lucide-react";

export default function Dashboard({
    products,
    totalPaidOrders,
    lowProduct,
    users,
    sales,
    clientsWithRecentSales,
    results
}) {
    console.log(results);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-chart-line"></i> <span>Dashboard Overview</span>
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex flex-col gap-y-8">

                {/* Main Content */}
                <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Card 1 - Total Products */}
                    <div className="rounded-2xl bg-white shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                                <Package size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Total Products
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900">
                                {products}
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-green-100 text-green-600">
                                <DollarSign size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Total Paid Orders
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900">
                                {totalPaidOrders} $
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Total Customers
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900">
                                {users}
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white shadow-xl p-6 flex flex-col gap-6 transition hover:shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-green-100 text-green-600">
                                <CreditCard size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Sales
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-4xl font-extrabold text-gray-900">
                                {sales}
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-7">
                    {/* Overview Section */}
                    <div className="card col-span-1 md:col-span-2 lg:col-span-4 p-4 bg-white rounded-lg shadow-lg">
                        <div className="card-header">
                            <p className="text-lg font-semibold text-gray-700">
                                Overview
                            </p>
                        </div>
                        <div className="card-body w-full h-full ">
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart
                                    data={results}
                                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient  id="colorDiff" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" stroke="#475569" tickMargin={6} />
                                    <YAxis
                                        stroke="#475569"
                                        tickFormatter={(value) => `${value} $`}
                                        tickMargin={6}
                                    />
                                    <Tooltip
                                        formatter={(value) => [`${value} $`, "Difference"]}
                                        labelFormatter={(label) => `Month: ${label}`}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="difference"
                                        stroke="#16a34a"
                                        fillOpacity={1}
                                        fill="url(#colorDiff)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Sales Section */}
                    <div className="card col-span-1 md:col-span-2 lg:col-span-3 p-4 bg-white rounded-lg shadow-lg">
                        <div className="card-header">
                            <p className="text-lg font-semibold text-gray-700">Recent Sales</p>
                        </div>
                        <div className="card-body h-[300px] overflow-auto p-0">
                            {clientsWithRecentSales.map((sale) => (
                                <div key={sale.id} className="flex items-center justify-between gap-x-4 py-2 pr-2">
                                    <div className="flex items-center gap-x-4">
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-medium text-blue-900">{sale.nom} {sale.prenom}</p>
                                            <p className="text-sm text-blue-600">{sale.email}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-green-900">{sale.total} $</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
