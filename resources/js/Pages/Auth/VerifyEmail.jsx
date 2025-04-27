import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
                <div className="w-full max-w-lg rounded-md p-8 bg-gradient-to-tr from-orange-50 to-white shadow-[0px_0px_10px_rgba(0,0,0,0.05)]">
                    <div className="mb-4 text-sm text-gray-600">
                        Thanks for signing up! Before getting started, could you verify
                        your email address by clicking on the link we just emailed to
                        you? If you didn't receive the email, we will gladly send you
                        another.
                    </div>
                
                    {status === 'verification-link-sent' && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            A new verification link has been sent to the email address
                            you provided during registration.
                        </div>
                    )}
                
                    <form onSubmit={submit}>
                        <div className="mt-4 flex items-center justify-between">
                            <PrimaryButton disabled={processing}>
                                Resend Verification Email
                            </PrimaryButton>
                
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-white bg-red-500 hover:bg-red-600 hover:outline px-3 py-2 outline-2 outline-red-200"
                            >
                                Log Out
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
