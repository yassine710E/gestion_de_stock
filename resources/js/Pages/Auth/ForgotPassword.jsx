import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className=" bg-gradient-to-tr from-orange-50 to-white h-screen flex items-center justify-center">
                <div className="max-w-5xl h-fit flex flex-col md:flex-row bg-gradient-to-tr from-orange-50 to-white p-8 md:p-12 mx-4 md:mx-8 rounded-lg ">
                    
                    {/* Left side - Form */}
                    <div className="w-full md:w-1/2 md:pr-8">
                        <h1 className="text-4xl text-indigo-900 mb-6 font-black">
                            Forgot Password
                        </h1>
                        
                        <div className="mb-6">
                            <div className="flex items-center">
                                <div className="w-20 h-[3px] bg-red-500 mb-3 mr-10"></div>
                            </div>
                            <p className="text-gray-600 mb-8">
                                Forgot your password? No problem. Just let us know your email
                                address and we will email you a password reset link that will
                                allow you to choose a new one.
                            </p>
                        </div>

                        {status && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="mb-6">
                                <InputLabel htmlFor="email" value="Email" className="text-gray-900" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-zinc-50"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-between">
                                <Link
                                    href={route('login')}
                                    className="text-sm text-gray-600 hover:text-gray-900"
                                >
                                    Back to login
                                </Link>
                                
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-3xl bg-red-500 px-6 py-3 text-white shadow-[0px_0px_10px_rgba(255,0,0,0.3)] hover:bg-red-400"
                                >
                                    Email Password Reset Link
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Illustration */}
                    <div className="hidden md:flex w-1/2 items-center justify-center">
                        <img
                            src="/images/forgot-password2.png"
                            alt="Forgot password illustration"
                            className="max-w-full"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://via.placeholder.com/400x400?text=Forgot+Password";
                            }}
                        />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
