import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    if (!links || links.length === 0) return null;

    return (
        <div className="mt-8 flex items-center justify-center p-6 bg-white rounded-xl mb-6 gap-2">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ease-in-out ${
                        link.active
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-700 hover:bg-gray-50 border"
                    } ${!link.url && "opacity-50 cursor-not-allowed"}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
};

export default Pagination;
