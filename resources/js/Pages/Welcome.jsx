import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import Navbar from "@/Components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Welcome({ auth }) {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initialize scroll-based animations
            gsap.from(".hero-section", {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top center",
                },
            });

            gsap.from(".features-section", {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: ".features-section",
                    start: "top center",
                },
            });

            gsap.from(".footer-section", {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: "top bottom",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar auth={auth} />
            <main className="pt-16">
                <div className="hero-section">
                    <HeroSection />
                </div>
                <div className="features-section">
                    <Features />
                </div>
                <div className="footer-section">
                    <Footer />
                </div>
            </main>
        </>
    );
}
