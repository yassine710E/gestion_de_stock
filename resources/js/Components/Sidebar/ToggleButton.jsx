import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function ToggleButton({ setExpanded, expanded }) {
    return (
        <div className="flex items-center justify-center p-2">
            <button
                onClick={() => setExpanded(!expanded)}
                className="p-2 bg-[#fbfbfb] hover:bg-gray-200 rounded w-full flex items-center justify-center transition-colors duration-200"
            >
                {expanded ? (
                    <ChevronLeftIcon size={20} />
                ) : (
                    <ChevronRightIcon size={20} />
                )}
            </button>
        </div>
    );
}
