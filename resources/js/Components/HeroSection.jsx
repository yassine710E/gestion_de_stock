import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    const component = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-title", {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            })
                .from(
                    ".hero-subtitle",
                    {
                        x: -100,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.8"
                )
                .from(
                    ".hero-description",
                    {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-buttons",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        stagger: 0.2,
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-image",
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power4.out",
                    },
                    "-=1"
                );
        }, component);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={component}
            className="relative bg-cover bg-center min-h-screen pt-24 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
                <img
                    src="/images/decore.png"
                    alt="Decorative"
                    className="absolute top-0 right-0 w-full md:w-2/3 xl:w-2/5 2xl:w-1/2 h-auto object-contain"
                />
                <img
                    src="/images/ellipse.png"
                    alt="Ellipse"
                    className="absolute left-0 bottom-30 w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/3 h-auto object-contain"
                />
            </div>

            {/* Content Container - Optimized for larger screens */}
            <div className="lg:container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 xl:gap-12 2xl:gap-16">
                    {/* Text Content - Enhanced sizing for larger screens */}
                    <div className="md:w-1/2 space-y-6 xl:space-y-8 text-center md:text-left">

                        <h2 className="hero-title text-orange-500 text-xl md:text-2xl xl:text-2xl font-[900]">
                            BEST STOCK & PRODUCTS MANAGEMENT SYSTEM
                        </h2>
                        <p className="hero-subtitle text-gray-800 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-loose font-volkhov">
                            Organize Your Products And Stock Super Easily
                        </p>
                        <p className="hero-description text-gray-600 text-base md:text-lg xl:text-xl max-w-2xl">
                            Experience the ultimate solution for managing your
                            products and stock. Simplify your workflow by
                            managing products, suppliers, and packages in one
                            place. Stay organized and ensure seamless operations
                            with our intuitive tools.
                        </p>
                        <div className="hero-buttons flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button
                                className="bg-yellow-500 shadow-md hover:shadow-red-200 hover:bg-yellow-600 text-white 
                    font-medium px-7 py-3 xl:text-lg rounded-full transition-colors duration-200"
                            >
                                Find out more
                            </button>
                            <Link
                                href={route("register")}
                                className="bg-orange-500 shadow-lg hover:bg-orange-600 text-white 
                        font-medium px-7 py-3 xl:text-lg rounded-full flex items-center justify-center gap-2 
                        transition-all duration-300 hover:shadow-orange-200 hover:shadow-xl"
                            >
                                <span>Get Started</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Traveler Image - Enhanced sizing for larger screens */}
                    <div className="md:w-1/2 relative">
                        <img
                            className="hero-image w-full h-auto max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto md:mx-0 object-cover"
                            src="/images/stock0.gif"
                            alt="Traveler"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
