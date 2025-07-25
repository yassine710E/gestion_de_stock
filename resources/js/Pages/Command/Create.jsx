import { Head, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import useCreateForm from "@/hooks/Create";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Success from "@/Components/Success";
import Info from "@/Components/Info";
import Error from "@/Components/Error";
import useFilterForm from "@/hooks/Index";

function Create({
    errors,
    clients,
    produits,
    flash,
    client_id,
    allLingsCommand,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [commandProduits, setCommandProduits] = useState(allLingsCommand);
    const [sum, setSum] = useState(0);

    console.log(allLingsCommand);

    const { handleDelete } = useFilterForm({}, "lignes.index");

    const toggleModal = () => setIsOpen(!isOpen);
    const closeModal = () => setIsOpen(false);

    const { data, processing, formHandling, setData } = useCreateForm(
        {
            client_id: client_id || "",
            produit_id: "",
            quantite: "",
        },
        "lignes.store",
        closeModal
    );

    const [commandData, setCommandData] = useState({
        total: 0,
        client_id: client_id || "",
    });

    const changeSelect = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validatedCommend = (e) => {
        e.preventDefault();
        router.post(route("commands.store"), {
            total: sum,
            client_id: commandData.client_id,
        });
    };

    useEffect(() => {
        const filteredProducts = allLingsCommand.filter(
            (ele) => ele.client_id == data.client_id
        );
        setCommandProduits(filteredProducts);
        setSum(
            filteredProducts.reduce((total, ele) => total + ele.sous_total, 0)
        );
    }, [data.client_id, allLingsCommand]);

    useEffect(() => {
        setCommandData((prev) => ({
            ...prev,
            client_id: data.client_id,
            total: sum,
        }));
    }, [data.client_id, sum]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-800 h-8 flex items-center gap-2">
                    <i className="fas fa-folder-open mr-2"></i>Create Command
                </h2>
            }
        >
            <Head title="Commands" />

            <div className="mx-auto max-w-7xl overflow-hidden py-6 my-6 bg-white shadow-sm sm:rounded-lg sm:px-6 lg:px-8 ">
                {flash.success && <Success flash={flash} />}
                {flash.error && <Error flash={flash} />}
                {flash.info && <Info flash={flash} />}

                {/* Formulaire de création de lignes */}
                <form
                    className="flex items-center space-x-4 my-2"
                    onSubmit={formHandling}
                >
                    <div className="flex items-center space-x-2">
                        <select
                            className={`w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                                errors.client_id
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            name="client_id"
                            id="client_id"
                            onChange={changeSelect}
                            value={data.client_id || ""}
                        >
                            <option value="">--- Choisir Client ---</option>
                            {clients.map((client) => (
                                <option key={client.id} value={client.id}>
                                    {`${client.nom} ${client.prenom}`}
                                </option>
                            ))}
                        </select>
                        {errors.client_id && (
                            <div className="text-sm text-red-600">
                                {errors.client_id}
                            </div>
                        )}
                    </div>

                    <PrimaryButton onClick={toggleModal} type="button">
                        Choisir un produit
                    </PrimaryButton>

                    {/* Modal pour choisir un produit */}
                    {isOpen && (
                        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                            <div className="relative p-4 w-full max-w-md">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Choisir un produit
                                        </h3>
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            ✖
                                            <span className="sr-only">
                                                Close modal
                                            </span>
                                        </button>
                                    </div>

                                    <div className="p-4">
                                        <div className="mb-4">
                                            <InputLabel htmlFor="produit_id">
                                                Nom produit
                                            </InputLabel>
                                            <select
                                                id="produit_id"
                                                name="produit_id"
                                                onChange={changeSelect}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                                    errors.produit_id
                                                        ? "border-red-500"
                                                        : "border-gray-300"
                                                }`}
                                                value={data.produit_id || ""}
                                            >
                                                <option value="">
                                                    --- Choisir Produit ---
                                                </option>
                                                {produits.map((produit) => (
                                                produit.stock !== null &&  (  <option
                                                        key={produit.id}
                                                        value={produit.id}
                                                    >
                                                        {`${produit.nom_produit} - ${produit.prix_vente}$`}
                                                    </option>)
                                                ))}
                                            </select>
                                            {errors.produit_id && (
                                                <div className="text-sm text-red-600">
                                                    {errors.produit_id}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel htmlFor="quantite">
                                                Quantité
                                            </InputLabel>
                                            <TextInput
                                                id="quantite"
                                                type="number"
                                                name="quantite"
                                                value={data.quantite || ""}
                                                onChange={changeSelect}
                                                placeholder="Quantité"
                                                className="mt-1 block w-full"
                                            />
                                            {errors.quantite && (
                                                <div className="text-sm text-red-600">
                                                    {errors.quantite}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-end space-x-2">
                                            <DangerButton onClick={closeModal}>
                                                Annuler
                                            </DangerButton>
                                            <SecondaryButton
                                                type="submit"
                                                disabled={processing}
                                                className={
                                                    processing
                                                        ? "opacity-75 cursor-not-allowed"
                                                        : ""
                                                }
                                            >
                                                {processing
                                                    ? "Confirmation..."
                                                    : "Ajouter Ligne"}
                                            </SecondaryButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </form>

                {/* Liste des lignes de commande */}
                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">
                        Lignes de commande en attente
                    </h3>
                    <div className="overflow-x-auto">
                        {commandProduits.length > 0 ? (
                            <table className="min-w-full bg-white border-gray-200 shadow-md border-2 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                            Photo
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                            Produit
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                            Quantité
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                            Sous Total
                                        </th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {commandProduits.map((ligne) => (
                                        <tr
                                            key={ligne.id}
                                            className="hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4 text-center">
                                                <img
                                                    className="w-[70px] rounded"
                                                    src={`/storage/${ligne.photo}`}
                                                    alt="Produit"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                {ligne.nom_produit}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ligne.quantite}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ligne.sous_total} $
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <form
                                                    onSubmit={(e) =>
                                                        handleDelete(
                                                            e,
                                                            ligne.id
                                                        )
                                                    }
                                                >
                                                    <DangerButton type="submit">
                                                        Supprimer
                                                    </DangerButton>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-100">
                                        <td
                                            colSpan="3"
                                            className="px-6 py-3 font-bold text-red-600 text-left"
                                        >
                                            Total Commande
                                        </td>
                                        <td
                                            colSpan="3"
                                            className="px-6 py-3 text-left font-bold"
                                        >
                                            {sum} $
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-600">
                                Aucune ligne de commande en attente.
                            </p>
                        )}
                    </div>

                    {/* Bouton final pour confirmer toute la commande */}
                    <div className="flex justify-end mt-4">
                        <PrimaryButton
                            onClick={validatedCommend}
                            disabled={commandProduits.length === 0}
                        >
                            Valider Commande
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;
