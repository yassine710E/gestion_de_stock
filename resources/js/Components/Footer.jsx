import React, { useLayoutEffect, useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import { Facebook, Github, Instagram, Linkedin, Twitch } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline for footer animations
            const masterTl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "center center",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate logo and description
            masterTl.from(".footer-brand", {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
            });

            // Animate social icons with stagger
            masterTl.from(
                ".social-icon",
                {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.4,
                },
                "-=0.5"
            );

            // Animate quick links
            masterTl.from(
                ".quick-links",
                {
                    opacity: 0,
                    x: -30,
                    duration: 0.8,
                    delay: 0.6,
                },
                "-=0.3"
            );

            // Animate quick links items
            masterTl.from(
                ".quick-links a",
                {
                    opacity: 0,
                    x: -20,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.2,
                },
                "-=0.5"
            );

            // Animate support info
            masterTl.from(
                ".support-info",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 0.8,
                },
                "-=0.3"
            );

            // Animate support info items
            masterTl.from(
                ".support-info p",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.2,
                },
                "-=0.5"
            );

            // Animate footer bottom
            masterTl.from(
                ".footer-bottom",
                {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    delay: 1,
                },
                "-=0.3"
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="h-screen bg-gray-800 text-white flex flex-col justify-between"
        >
            <div className="container mx-auto px-4 flex-1 py-12 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 footer-brand">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-white mb-4 block"
                        >
                            Stocky
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Welcome to Stocky - your comprehensive inventory
                            management solution. We streamline communication
                            between suppliers and clients while providing
                            real-time stock tracking, automated reordering, and
                            detailed analytics. Transform your supply chain
                            management today.
                        </p>
                        <div className="flex items-center space-x-4 social-icons">
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
                                    className="social-icon bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="quick-links">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-3">
                            {[
                                "Dashboard",
                                "Products",
                                "Categories",
                                "Suppliers",
                                "Stocks",
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

                    <div className="support-info">
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
            </div>

            <div className="border-t border-gray-700 py-8 footer-bottom">
                <div className="container mx-auto px-4">
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
