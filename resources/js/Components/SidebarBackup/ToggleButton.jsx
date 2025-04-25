import React from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "lucide-react";

export default function ToggleButton({setExpanded, expanded}) {
    return (
        <div className="flex items-start mt-4 mb-4 mx-2">
            <button
                onClick={() => setExpanded(!expanded)}
                className="p-2 bg-[#fbfbfb] hover:bg-gray-200 rounded"
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
