import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Navbar({auth}) {
    return (
            <header className="bg-white shadow-sm p-4 md:p-4 fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-bold text-black">
                        Jadoo
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 text-gray-700">
                        {["Destinations", "Hotels", "Flights", "Bookings"].map(
                            (item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="hover:text-orange-500 transition-colors duration-200"
                                >
                                    {item}
                                </Link>
                            )
                        )}
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
                                font-medium px-6 py-3 rounded-full transition-colors duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>
    );
}
