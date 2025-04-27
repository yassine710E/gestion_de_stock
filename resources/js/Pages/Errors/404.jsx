import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function NotFound({ status }) {
    return (
        <GuestLayout>
            <Head title="404" />

            <div className="bg-[#f3f3f3] min-h-screen flex items-center justify-center">
                <div className="flex flex-col md:flex-row w-full max-w-7xl px-4">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl mb-4 font-bold">Ooops...</h1>
                            <h2 className="text-3xl md:text-6xl mb-4">Page Not Found</h2>
                            <p className="mb-6 md:mb-10 underline">Perhaps You made a Mistake?</p>
                            <Link
                                href={route("dashboard")}
                                className="px-6 md:px-10 py-3 md:py-4 bg-red-500 text-white rounded-md hover:bg-red-200 hover:text-gray-700 transition-all hidden md:inline-block"
                            >
                                Go Back
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-center flex-col">
                        <img
                            src="/images/404.png"
                            alt="404 Not Found"
                            className="object-contain max-w-full h-auto"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://via.placeholder.com/400x300?text=404+Not+Found";
                            }}
                        />

                        <Link
                            href={route("dashboard")}
                            className="px-10 md:px-10 mt-10 py-3 md:py-4 bg-red-500 text-white rounded-md hover:bg-red-200 hover:text-gray-700 transition-all lg:hidden md:hidden"
                        >
                            Go Back
                        </Link>
                        
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
