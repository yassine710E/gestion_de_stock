import { useForm, Head, router } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Textarea } from "@headlessui/react";
import DangerButton from "@/Components/DangerButton";

function Edit({ client, errors }) {
    const { data, setData, post, processing } = useForm({
        nom: client.nom,
        prenom: client.prenom,
        email: client.email,
        telephone: client.telephone,
        fax: client.fax,
        societe: client.societe,
        adresse: client.adresse,
        age: client.age,
    });

    const cancelHandling = (e) => {
        e.preventDefault();
        router.get('/clients');
    };

    const formHandling = (e) => {
        e.preventDefault();

        post(route("clients.update", client.id), {
            data,
            onSuccess: () => {
                setData({
                    nom: "",
                    prenom: "",
                    email: "",
                    telephone: "",
                    fax: "",
                    societe: "",
                    adresse: "",
                    age: "",
                });
            },
            preserveScroll: true,
        });
    };

    const changeHandling = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Create Client
                </h2>
            }
        >
            <Head title="Client" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={formHandling} className="grid grid-cols-2 gap-5 p-4">
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="nom">nom Client</InputLabel>
                                    <TextInput id="nom" name="nom" value={data.nom || ""} onChange={changeHandling} placeholder="Enter le nom de client" />
                                    {errors.nom && <div className="text-sm text-red-600">{errors.nom}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="prenom">prenom Client</InputLabel>
                                    <TextInput id="prenom" name="prenom" value={data.prenom || ""} onChange={changeHandling} placeholder="Enter le prenom de client" />
                                    {errors.prenom && <div className="text-sm text-red-600">{errors.prenom}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="email">email</InputLabel>
                                    <TextInput id="email" name="email" value={data.email || ""} onChange={changeHandling} placeholder="Enter email" />
                                    {errors.email && <div className="text-sm text-red-600">{errors.email}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="telephone">telephone</InputLabel>
                                    <TextInput id="telephone" name="telephone" value={data.telephone || ""} onChange={changeHandling} placeholder="Enter la numero de telephone" />
                                    {errors.telephone && <div className="text-sm text-red-600">{errors.telephone}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="age">Age</InputLabel>
                                    <TextInput id="age" name="age" value={data.age || ""} onChange={changeHandling} placeholder="Enter age" />
                                    {errors.age && <div className="text-sm text-red-600">{errors.age}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="societe">Societe</InputLabel>
                                    <TextInput id="societe" name="societe" value={data.societe || ""} onChange={changeHandling} placeholder="Enter la societé" />
                                    {errors.societe && <div className="text-sm text-red-600">{errors.societe}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="fax">Fax</InputLabel>
                                    <TextInput id="fax" name="fax" value={data.fax || ""} onChange={changeHandling} placeholder="Enter Fax" />
                                    {errors.fax && <div className="text-sm text-red-600">{errors.fax}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="adresse">Adresse</InputLabel>
                                    <Textarea className='rounded-xl border-gray-300 shadow-sm' id="adresse" name="adresse" value={data.adresse || ""} onChange={changeHandling} placeholder="Enter adresse" />
                                    {errors.adresse && <div className="text-sm text-red-600">{errors.adresse}</div>}
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <PrimaryButton className="bg-blue-500" type="submit" disabled={processing}>
                                        {processing ? "Modification..." : "Modifier Client"}
                                    </PrimaryButton>
                                    <DangerButton onClick={cancelHandling}>Cancel</DangerButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Edit;
