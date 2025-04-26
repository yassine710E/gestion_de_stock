import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";


const font = `
@import url('https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap');
`;

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="PayU" />

            {/*Navbar Section*/}
            <Navbar auth={auth}/>

            {/* Hero Section */}
            <HeroSection />

            {/* Footer Section */}
            <Footer />
        </>
    );
}
