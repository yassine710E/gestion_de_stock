import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i className="fas fa-chart-line"></i>{" "}
                    <span>Profile Settings</span>
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="mt-6">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8 ">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 border">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 border">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 border">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
