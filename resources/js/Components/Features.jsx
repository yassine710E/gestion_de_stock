import React, { useLayoutEffect, useRef } from "react";
import { BarChart3, Package, Users2, Truck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const sectionRef = useRef(null);
    const features = [
        {
            icon: <Package className="w-8 h-8" />,
            title: "Inventory Tracking",
            description:
                "Real-time tracking of your stock levels and product movements",
        },
        {
            icon: <Users2 className="w-8 h-8" />,
            title: "Supplier Management",
            description:
                "Manage your suppliers and maintain strong relationships",
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Analytics",
            description:
                "Detailed reports and insights for better decision making",
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Order Management",
            description:
                "Streamline your ordering process with automated systems",
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the header
            gsap.from(".feature-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".feature-title",
                    start: "top bottom",
                    end: "top center",
                    scrub: 1,
                },
            });

            // Animate the feature cards
            const cards = gsap.utils.toArray(".feature-card");
            cards.forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        end: "top center",
                        toggleActions: "play none none reverse",
                    },
                    delay: i * 0.1,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-screen py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden flex items-center"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 feature-title">
                    <h2 className="text-orange-500 font-bold text-lg mb-3">
                        FEATURES
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-volkhov">
                        Smart Solutions for Your Business
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Take control of your inventory with our comprehensive
                        suite of tools designed to streamline your operations
                        and boost efficiency.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg 
                                     hover:shadow-xl hover:shadow-orange-100/50 
                                     transition-all duration-300 group"
                        >
                            <div
                                className="text-orange-500 mb-4 transform group-hover:scale-110 
                                          transition-transform duration-300"
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
