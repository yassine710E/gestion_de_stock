import React from "react";

export default function NoResults({ message = "No Results" }) {
    return (
        <div className="text-center py-24 bg-red-50 border-2 rounded-xl mt-4">
            <h1 className="text-red-500 text-xl font-bold">
                <i className="fa fa-circle-exclamation mx-2"></i>
                {message}
            </h1>
        </div>
    );
}
