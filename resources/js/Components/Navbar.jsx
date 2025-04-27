import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Navbar({ auth }) {
    const menuItems = [
        {
            title: "Dashboard",
            href: route("dashboard"),
            sub: [],
        },
        {
            title: "Category",
            href: route("categories.index"),
            sub: [],
        },
        { title: "Products", href: route("produits.index"), sub: [] },
        {
            title: "Suppliers",
            href: route("fournisseurs.index"),
            sub: [],
        },
        { title: "Clients", href: route("clients.index"), sub: [] },
        { title: "Stocks", href: route("stocks.index"), sub: [] },
    ];

    return (
        <header className=" backdrop-blur-md backdrop-filter shadow-sm p-4 md:p-4 fixed top-0 left-0 right-0 z-50">
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
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </nav>

                {/* Auth Section */}
                <div className="flex items-center space-x-4 md:space-x-6">
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
                </div>
            </div>
        </header>
    );
}
