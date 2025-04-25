import React from "react";
import { ChevronRightIcon } from "lucide-react";

const NavItem = ({ item, expanded, isActive, isOpen, onToggleDropdown, setActiveItem }) => {
    const IconComponent = item.icon; // Directly use the icon component passed as a prop
    const hasSub = item.sub.length > 0;

    return (
        <div className="mb-4 transition-all duration-1000">
            {/* Main menu item */}
            <div
                onClick={() => {
                    setActiveItem(item.title);
                    if (hasSub) {
                        onToggleDropdown(item.title);
                    }
                }}
                className={`flex items-center p-2 rounded-md cursor-pointer transition-all ${
                    isActive ? "bg-[#efefef]" : "hover:bg-[#efefef]"
                } ${expanded ? "" : "justify-start"}`}
            >
                {/* Icon */}
                {IconComponent && (
                    <IconComponent
                        size={16}
                        className={
                            isActive ? "text-black " : "text-[#bcbcbc]"
                        }
                    />
                )}

                {/* Title */}
                {expanded && (
                    <span
                        className={`ml-3 flex-1 text-sm font-medium ${
                            isActive ? "text-black" : "text-[#bcbcbc]"
                        }`}
                    >
                        {item.title}
                    </span>
                )}

                {/* Dropdown arrow */}
                {hasSub && expanded && (
                    <ChevronRightIcon
                        size={20}
                        className={`transform transition-transform duration-300 ${
                            isOpen ? "rotate-90 text-black" : "text-gray-300"
                        }`}
                    />
                )}
            </div>

            {/* Submenu items */}
            {hasSub && isOpen && expanded && (
                <div className="ml-8 mt-2 space-y-1 p-2 rounded-md">
                    {item.sub.map((sub) => (
                        <div
                            key={sub}
                            onClick={() => setActiveItem(sub)}
                            className="text-gray-600 text-xs cursor-pointer px-2 py-1 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            {sub}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavItem;