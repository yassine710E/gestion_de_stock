import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function NotFound({ status }) {
    return (
        <GuestLayout>
            <Head title="404"/>
            
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-tr from-gray-200 to-white">
                <div className="flex flex-row items-center mb-6">
                    <p className='text-9xl text-gray-500'>4</p>
                    <img 
                        src="/images/Ghost.svg" 
                        alt="Ghost Error" 
                        className="w-32 h-32 object-contain animate-floating opacity-80"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x300?text=404+Not+Found";
                        }}
                        style={{
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    />
                    <p className='text-9xl text-gray-500'>4</p>
                </div>
                <style jsx>{`
                    @keyframes float {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }
                    .animate-floating {
                        animation: float 12s ease-in-out infinite;
                    }
                `}</style>

                <div className="text-center">
                    <h1 className="text-3xl text-gray-700 font-bold">Boo! Page missing!</h1>
                    <h2 className="text-md font-semibold text-gray-600 mt-4">Whoops! This page must be a ghost - it's not here!</h2>
                    <p className="text-xs underline underline-offset-2 font-semibold text-gray-400">Perhaps You made a mistake?</p>
                    <div className="w-32 h-[3px] rounded-full bg-gray-300 mx-auto my-6"></div>
                    <div className='mt-8'>
                        <Link 
                            href={route('dashboard')} 
                            className="px-6 py-2 bg-black text-sm text-white rounded-full hover:bg-gray-200 hover:text-gray-700 hover:ring-2 ring-offset-2 ring-gray-500 transition-all"
                        >
                            Find shelter
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}