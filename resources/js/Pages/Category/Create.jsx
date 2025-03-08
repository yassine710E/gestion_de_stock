import { useForm, Head ,usePage } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Create({errors}) {

    
    
    const { data, setData, post, processing } = useForm({
        "nom_cat": null
    });
    const formHandling = (e) => {
        e.preventDefault();
        post(route('categories.store'), {
            onSuccess: () => setData('nom_cat', "")
        });
    }
    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <i className="fas fa-folder-open mr-2"></i>Create Category
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={formHandling} className="space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="nom_cat" className="text-sm font-medium text-gray-700">
                                        Category Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="nom_cat"
                                        name="nom_cat" 
                                        value={data.nom_cat || ''} 
                                        onChange={(e) => setData('nom_cat', e.target.value)}
                                        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.nom_cat ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter category name"
                                    />
                                    {errors.nom_cat && <div className="text-sm text-red-600">{errors.nom_cat}</div>}
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Creating...' : 'Create Category'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create
