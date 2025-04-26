import { Head, Link } from "@inertiajs/react";
import { Play } from "lucide-react";

const font = `
@import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap');
`;

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="PayU" />

            {/* Header Section */}
            <header className="bg-white shadow-md p-4 md:p-6 fixed top-0 left-0 right-0 z-50 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-extrabold text-orange-500"
                    >
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

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />

                    {/* Decorative Elements - Enhanced for larger screens */}
                    <img
                        src="/images/decore.png"
                        alt="Decorative"
                        className="absolute top-0 right-0 w-full md:w-1/2 xl:w-3/5 2xl:w-2/3  h-auto object-contain opacity-75"
                    />
                    <img
                        src="/images/ellipse.png"
                        alt="Ellipse"
                        className="absolute -left-24 bottom-0 w-2/3 md:w-1/2 xl:w-2/5 2xl:w-1/2 h-auto object-contain opacity-50"
                    />
                </div>

                {/* Content Container - Optimized for larger screens */}
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 xl:gap-12 2xl:gap-16">
                        {/* Text Content - Enhanced sizing for larger screens */}
                        <div className="md:w-1/2 space-y-6 xl:space-y-8 text-center md:text-left">
                            <h2 className="text-orange-500 text-xl md:text-2xl xl:text-3xl font-[900]">
                                BEST STOCK & PRODUCTS MANAGEMENT SYSTEM
                            </h2>
                            <p className="text-gray-800 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight font-volkhov">
                                Organize Your Products And Stock Super Easily
                            </p>
                            <p className="text-gray-600 text-base md:text-lg xl:text-xl max-w-2xl">
                            Experience the ultimate solution for managing your products and stock.
                            Simplify your workflow by managing products, suppliers, and packages in one place. 
                            Stay organized and ensure seamless operations with our intuitive tools.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white 
                                    font-medium px-8 py-4 xl:text-lg rounded-full transition-colors duration-200"
                                >
                                    Find out more
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white 
                                    font-medium px-8 py-4 xl:text-lg rounded-full flex items-center justify-center gap-3 transition-colors duration-200"
                                >
                                    <Play className="w-6 h-6" />
                                    <span>Register</span>
                                </button>
                            </div>
                        </div>

                        {/* Traveler Image - Enhanced sizing for larger screens */}
                        <div className="md:w-1/2 relative">
                            <img
                                src="/images/traveler.png"
                                alt="Traveler"
                                className="w-full h-auto max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto md:mx-0 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
