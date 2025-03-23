import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Sign Up" />

            <div className="bg-slate-50 h-screen flex items-center justify-center">
                <div className="max-w-6xl h-fit flex flex-col md:flex-row bg-gradient-to-tr from-orange-50 to-white p-8 md:p-12 mx-4 md:mx-8 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.05)]">

                    {/* Left side - Form */}
                    <div className="w-full md:w-1/2 md:pr-8">
                        <h1 className="text-4xl text-indigo-900 mb-8 font-black">
                            Sign Up
                        </h1>

                        <div className="mb-6">
                            <div className="flex items-center">
                                <div className="w-20 h-[3px] bg-red-500 mb-3 mr-10"></div>
                                <h2 className="text-sm font-bold text-red-500 mb-4">
                                    Sign up with
                                </h2>
                            </div>
                            
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                                <button className="flex items-center justify-center px-4 py-2 border bg-white border-gray-200 rounded-md w-full md:w-1/2 hover:bg-gray-50 text-sm" type="button">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="#4285F4"
                                        />
                                    </svg>
                                    Sign up with Google
                                </button>
                                <button className="flex items-center justify-center px-4 py-2 border bg-white border-gray-200 rounded-md w-full md:w-1/2 hover:bg-gray-50 text-sm" type="button">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                            fill="#1877F2"
                                        />
                                    </svg>
                                    Sign up with Facebook
                                </button>
                            </div>
                        </div>

                        <form onSubmit={submit}>
                            <div className="flex flex-col md:flex-row w-full md:space-x-4">
                                <div className="mb-4 w-full">
                                    <InputLabel htmlFor="name" value="Name" className="text-gray-900"/>
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  bg-zinc-50"
                                        autoComplete="name"
                                        placeholder="Jhon Doe"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2"/>
                                </div>

                                <div className="mb-4 w-full">
                                    <InputLabel htmlFor="email" value="Email" className="text-gray-900"/>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        value={data.email}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-zinc-50"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2"/>
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <InputLabel htmlFor="password" value="Password" className="text-gray-900"/>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    className="mt-1 block w-full rounded-md border-gray-100 shadow-sm bg-zinc-50"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.password} className="mt-2"/>
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-gray-900"/>
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Password"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-zinc-50"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password_confirmation", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2"/>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center mt-4">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                        I've read and agree with{" "}
                                        <span className="text-indigo-600">
                                            Terms of Service
                                        </span>{" "}
                                        and our{" "}
                                        <span className="text-indigo-600">
                                            Privacy Policy
                                        </span>
                                    </label>
                                </div>
                            </div>
                            
                            {/* Buttons */}
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-3xl bg-red-500 p-3 w-24 h-14 text-white shadow-[0px_0px_10px_rgba(255,0,0,0.3)] hover:bg-red-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-sm mt-6">
                                Already have an account?{" "}
                                <Link href={route("login")} className="font-medium text-red-500 hover:text-red-600">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Illustration */}
                    <div className="hidden md:flex w-1/2 items-center justify-center">
                        <img
                            src="/images/cart-illustration.png"
                            alt="Cart illustration"
                            className="max-w-full"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://via.placeholder.com/400x400?text=Rocket+Illustration";
                            }}
                        />
                    </div>

                </div>
            </div>
        </GuestLayout>
    );
}
