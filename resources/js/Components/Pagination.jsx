import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    if (!links || links.length === 0) return null;

    return (
        <div className="mt-4 bg-white p-6 mb-6 rounded-lg flex items-center justify-center border">
            {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-3 py-2 mx-1 text-sm font-medium rounded-md ${
                            link.active
                                ? "bg-gray-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                        } ${!link.url && "opacity-50 cursor-not-allowed"}`}
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
            ></Link>))}
        </div>
    );
};

export default Pagination;
