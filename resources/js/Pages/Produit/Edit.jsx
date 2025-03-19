import { useForm, Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';




function Edit({ produit, categories, errors }) {
    const [preview, setPreview] = useState(produit.photo ? `/storage/${produit.photo}` : null);
    const { data, setData, post, processing } = useForm({
        "category_id": produit.category_id,
        "nom_produit": produit.nom_produit,
        "prix_p": produit.prix_p,
        "photo": null,
        "code_barre": produit.code_barre

    })

    const formHandling = (e) => {
        e.preventDefault();



        post(route('produits.update',produit.id) , {
            onSuccess: () => {
                // Clear the form
                setData({
                    category_id: "",
                    nom_produit: "",
                    prix_p: "",
                    photo: null,
                    code_barre: ""
                });
                setPreview(null);
                
                // You can add a success message or redirect here if needed
            },
            // Preserve the scroll position after submission
            preserveScroll: true,        
        });


    };

    const changeHandling = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setData('photo', file);
        }
    };


    const handleRemove = () => {
        setPreview(null);
        setData('photo', null);
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Edit Produit
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route("produits.index")}>
                        <DangerButton className='mb-8 gap-4'>
                            <i class="fa-solid fa-arrow-left"></i>
                            <span>annuler</span></DangerButton>
                    </Link>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={formHandling} className="space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="nom_produit">
                                        nom produit
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="nom_produit"
                                        name="nom_produit"
                                        value={data.nom_produit || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter category name"
                                    />
                                    {errors.nom_produit && <div className="text-sm text-red-600">{errors.nom_produit}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="category_id" className="text-sm font-medium text-gray-700">
                                        nom category
                                    </InputLabel>
                                    <select
                                        onChange={changeHandling}
                                        name="category_id"
                                        id="category_id"
                                        value={data.category_id}
                                        className='border-gray-300 rounded'
                                    >

                                        <option value=''>---choisir categorie---</option>
                                        {categories.map((category) => (
                                            <option value={category.id}>{category.nom_cat}</option>
                                        ))}
                                    </select>

                                    {errors.category_id && <div className="text-sm text-red-600">{errors.category_id}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="prix_p">
                                        prix produit
                                    </InputLabel>
                                    <TextInput
                                        type="number"
                                        id="prix_p"
                                        name="prix_p"
                                        value={data.prix_p || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter prix produit"
                                    />
                                    {errors.prix_p && <div className="text-sm text-red-600">{errors.prix_p}</div>}
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <InputLabel htmlFor="code_barre" className="text-sm font-medium text-gray-700">
                                        Code Barre
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        id="code_barre"
                                        name="code_barre"
                                        value={data.code_barre || ''}
                                        onChange={changeHandling}
                                        placeholder="Enter category name"
                                    />
                                    {errors.code_barre && <div className="text-sm text-red-600">{errors.code_barre}</div>}
                                </div>
                                <div className="flex flex-col space-y-2">


                                    <InputLabel className={`w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-100 hover:text-blue-800 ${errors.photo ? 'border-red-500' : 'border-gray-300'} `}>
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className="mt-2 text-sm">Select an image</span>
                                        <TextInput
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            key={preview}
                                        />
                                    </InputLabel>
                                    {errors.photo && <div className="text-sm text-red-600">{errors.photo}</div>}

                                </div>
                                {/* Image Preview */}
                                {preview && (
                                    <div className="relative group">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-full h-64 object-cover rounded-lg border-2 border-dashed border-gray-200"
                                        />
                                        <PrimaryButton
                                            type="button"
                                            onClick={handleRemove}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </PrimaryButton>
                                    </div>
                                )}


                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Updating...' : 'Updating Produit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Edit
