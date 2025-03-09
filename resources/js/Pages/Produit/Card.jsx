// In your existing code, modify the image container and img tag styles:

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useForm } from '@inertiajs/react';

function Card({ produit }) {

    const { delete: destroy } = useForm();

    //delete handling
    const deleteHandler = (e, id) => {
        e.preventDefault();
        if (confirm('are you sure !!!')) {
            destroy(route('produits.destroy', id));
        }

    };
    return (
        <div key={produit.id} className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 h-[200px]"> {/* Added fixed height */}
                <img
                    alt={produit.nom_produit}
                    src={`/storage/${produit.photo}`}
                    className="h-[200px] w-full object-cover object-center group-hover:opacity-75"
                    style={{ objectFit: 'cover' }} // Ensures image covers the area without distortion
                />
            </div>
            <div className="mt-4 space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                        {produit.nom_produit}
                    </h3>
                    <p className="text-lg font-bold text-indigo-600">
                        ${parseFloat(produit.prix_p).toFixed(2)}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
                        {produit.category.nom_cat}
                    </span>
                    <span className="text-sm text-gray-500">
                        Code: {produit.code_barre}
                    </span>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                    <button className="p-2 text-blue-600 hover:text-blue-800" onClick={() => window.location.href = route('produits.show', produit.id)}>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="p-2 text-green-600 hover:text-green-800" onClick={() => window.location.href = route('produits.edit', produit.id)}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <form onSubmit={(e) => deleteHandler(e, produit.id)}>
                        <button type='submit' className="p-2 text-red-600 hover:text-red-800">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Card
