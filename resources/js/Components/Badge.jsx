// resources/js/Components/Badge.jsx
import React from "react";

const Badge = ({ children, color = "gray" }) => {
    const colors = {
        gray: "bg-gray-100 text-gray-800",
        green: "bg-green-100 text-green-800",
        red: "bg-red-100 text-red-800",
        blue: "bg-blue-100 text-blue-800",
        yellow: "bg-yellow-100 text-yellow-800",
    };

    return (
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors[color]}`}>
            {children}
        </span>
    );
};

export default Badge;
