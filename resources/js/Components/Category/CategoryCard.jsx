import React from "react";
import { Link } from "@inertiajs/react";

export default function CategoryCard({ category, onDelete }) {
    return (
        <div className="relative group">
            <div
                onClick={() =>
                    (window.location.href = route(
                        "categories.edit",
                        category.id
                    ))
                }
                className="bg-gray-50 rounded-md p-4 h-20 cursor-pointer hover:ring-1 ring-gray-300 relative flex items-center justify-center"
            >
                <form
                    onSubmit={(e) => onDelete(e, category.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute -right-2 -top-2 hover:border-1 border-gray-300"
                >
                    <button
                        type="submit"
                        className="bg-gray-100 text-gray-600 hover:bg-red-200 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition duration-150"
                    >
                        <i className="fas fa-times text-xs"></i>
                    </button>
                </form>

                <div className="flex flex-col items-center justify-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-black">
                        {category.nom_cat}
                    </span>
                </div>
            </div>
        </div>
    );
}
