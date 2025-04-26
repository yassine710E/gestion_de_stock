import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Facebook, Github, Instagram, Linkedin, Twitch } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-white mb-4 block"
                        >
                            Jadoo
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            The ultimate solution for managing your products and
                            stock. Simplify your workflow and stay organized
                            with our powerful tools.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[
                                {
                                    name: "Facebook",
                                    href: "https://facebook.com",
                                    icon: <Facebook className="w-5 h-5" />,
                                },
                                {
                                    name: "Github",
                                    href: "https://github.com",
                                    icon: <Github className="w-5 h-5" />,
                                },
                                {
                                    name: "Instagram",
                                    href: "https://instagram.com",
                                    icon: <Instagram className="w-5 h-5" />,
                                },
                                {
                                    name: "LinkedIn",
                                    href: "https://linkedin.com",
                                    icon: <Linkedin className="w-5 h-5" />,
                                },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-3">
                            {[
                                "Home",
                                "About Us",
                                "Features",
                                "Pricing",
                                "Contact",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item
                                        .toLowerCase()
                                        .replace(" ", "-")}`}
                                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <div className="space-y-3">
                            <p className="text-gray-400">
                                <strong>Email:</strong>
                                <br />
                                support@jadoo.com
                            </p>
                            <p className="text-gray-400">
                                <strong>Phone:</strong>
                                <br />
                                +1 (555) 123-4567
                            </p>
                            <p className="text-gray-400">
                                <strong>Address:</strong>
                                <br />
                                123 Stock Street
                                <br />
                                New York, NY 10001
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Jadoo. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {["Terms", "Privacy", "Cookies"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
