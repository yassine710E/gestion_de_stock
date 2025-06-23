import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function ToggleButton({ setExpanded, expanded }) {
    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <div
                className={`flex transition-all duration-500 ease-in-out ${
                    expanded ? "justify-end" : "justify-start"
                }`}
            >
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={`w-full h-8 rounded flex items-center justify-center transition-all duration-300 ease-in-out transform 
                    ${
                        expanded
                            ? "bg-[#efefef] text-black"
                            : "bg-[#fbfbfb] hover:bg-[#efefef]"
                    }`}
                >
                    {expanded ? (
                        <ChevronLeftIcon
                            size={16}
                            className="transition-transform duration-300"
                        />
                    ) : (
                        <ChevronRightIcon
                            size={16}
                            className="transition-transform duration-300 hover:translate-x-[2px]"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
