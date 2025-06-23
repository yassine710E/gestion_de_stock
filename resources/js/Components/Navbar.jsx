import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Home, Layers, Package, Truck, Users, Boxes } from "lucide-react";

export default function Navbar({ auth }) {
    const menuItems = [
        {
            title: "Dashboard",
            href: route("dashboard"),
            icon: Home,
            sub: [],
        },
        {
            title: "Category",
            href: route("categories.index"),
            icon: Layers,
            sub: [],
        },
        {
            title: "Products",
            href: route("produits.index"),
            icon: Package,
            sub: [],
        },
        {
            title: "Suppliers",
            href: route("fournisseurs.index"),
            icon: Truck,
            sub: [],
        },
        {
            title: "Clients",
            href: route("clients.index"),
            icon: Users,
            sub: [],
        },
        {
            title: "Stocks",
            href: route("stocks.index"),
            icon: Boxes,
            sub: [],
        },
    ];

    return (
        <header className="backdrop-blur-md backdrop-filter shadow-sm p-4 md:p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-black">
                    Stocky
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700">
                    {menuItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="hover:text-orange-500 transition-colors duration-200"
                        >
                            <div className="flex items-center">
                                {/* Show only icon on md screens, text on larger screens */}
                                <div className="hidden md:flex lg:hidden items-center justify-center p-2 rounded-full hover:bg-gray-100">
                                    <item.icon className="h-4 w-4" />
                                </div>
                                {/* Show both icon and text on larger screens */}
                                <div className="hidden lg:flex items-center space-x-2">
                                    <item.icon className="h-3 w-3" />
                                    <span className="text-sm">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </nav>

                {/* Auth Section */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    {auth.user ? (
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-red-50 px-6 rounded-md py-2 bg-red-600 hover:text-red-200 hover:bg-red-400 transition-colors duration-200"
                        >
                            Logout
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="bg-orange-500 hover:bg-orange-600 text-white 
                            font-medium px-5 py-2 rounded-sm transition-colors duration-200"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
