import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

function Card({ produit, handleDelete }) {
    return (
        <div className="group relative flex flex-col bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden rounded-lg">
            {/* Delete (X) Button Top Right */}
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={(e) => handleDelete(e, produit.id)}
                className="absolute top-3 right-3 z-10"
            >
                <button
                    type="submit"
                    className="h-8 w-8 flex items-center justify-center bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 border border-gray-200 rounded-full shadow-sm transition-all duration-300"
                >
                    <FontAwesomeIcon icon={faTimes} size="sm" />
                </button>
            </form>

            <Link
                href={route("produits.show", produit.id)}
                className="flex flex-col flex-1"
            >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                    <img
                        alt={produit.nom_produit}
                        src={`/storage/${produit.photo}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 space-y-2">
                    {/* Product Title and Price */}
                    <div className="flex justify-between items-start">
                        <h3 className="text-base font-semibold text-gray-900 truncate leading-tight">
                            {produit.nom_produit}
                        </h3>
                        <p className="text-sm font-bold text-indigo-600 whitespace-nowrap">
                            ${parseFloat(produit.prix_vente).toFixed(2)}
                        </p>
                    </div>

                    {/* Category and Code */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                            {produit.category.nom_cat}
                        </span>
                        <span>• Code: {produit.code_barre}</span>
                    </div>

                    {/* Spacer */}
                    <div className="flex-grow"></div>
                </div>
            </Link>

            {/* Edit Button */}
            <Link
                href={route("produits.edit", produit.id)}
                className="absolute bottom-3 right-3 h-10 w-10 flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 rounded-full shadow-md transition-all"
            >
                <FontAwesomeIcon icon={faPen} size="sm" />
            </Link>
        </div>
    );
}

export default Card;
