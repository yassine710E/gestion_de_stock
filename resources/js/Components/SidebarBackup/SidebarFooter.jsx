import React from "react";

export default function SideBarFooter({setExpanded, expanded}) {
    return (
        <div className="pt-4 border-t border-gray-200">
            <button
                onClick={() => console.log("Logout")}
                className="w-full flex items-center justify-start space-x-2 p-2 rounded-md hover:text-white hover:bg-red-500 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-9V5"
                    />
                </svg>
                {expanded && (
                    <span className="text-sm font-medium">Logout</span>
                )}
            </button>
        </div>
    );
}
