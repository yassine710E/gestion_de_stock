import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavItem({
    item,
    expanded,
    isOpen,
    onToggleDropdown,
    setActiveItem,
    active, // Add this prop
}) {
    const { url } = usePage();
    const IconComponent = item.icon;
    const hasSub = item.sub.length > 0;

    // Update isActive to use both the active prop and URL check
    const isActive = active || url === item.href || 
                    (item.sub && item.sub.some(subItem => url === subItem.href)) ||
                    url.startsWith(item.href + '/');

    return (
        <div className="mb-4 transition-all duration-300">
            <div
                className={clsx(
                    "flex items-center p-2 rounded-md cursor-pointer transition-colors duration-200",
                    isActive ? "bg-[#efefef]" : "hover:bg-[#efefef]"
                )}
            >
                {/* Icon: always clickable */}
                {IconComponent && (
                    <Link
                        href={item.href}  // Set the href to the route here
                        onClick={() => setActiveItem(item.title)}
                        className="flex-shrink-0"
                    >
                        <IconComponent
                            size={16}
                            className={clsx(
                                isActive ? "text-black" : "text-[#bcbcbc]"
                            )}
                        />
                    </Link>
                )}

                {/* Title: only when expanded */}
                {expanded && (
                    <Link
                        href={item.href}  // Set the href to the route here
                        onClick={() => setActiveItem(item.title)}
                        className={clsx(
                            "ml-3 flex-1 text-sm font-medium",
                            isActive ? "text-black" : "text-[#bcbcbc]"
                        )}
                    >
                        {item.title}
                    </Link>
                )}

                {/* Dropdown chevron: only toggles submenu */}
                {hasSub && expanded && (
                    <button
                        type="button"
                        onClick={() => onToggleDropdown(item.title)}
                        className="p-1"
                    >
                        <ChevronRightIcon
                            size={16}
                            className={clsx(
                                "transform transition-transform duration-200",
                                isOpen ? "rotate-90 text-black" : "text-gray-300"
                            )}
                        />
                    </button>
                )}
            </div>

            {/* Submenu items */}
            {hasSub && isOpen && expanded && (
                <div className="ml-8 mt-2 space-y-1 p-1 rounded-md">
                    {item.sub.map((sub) => (
                        <Link
                            key={sub.title}
                            href={sub.href}  // Each submenu item should have a route
                            onClick={() => setActiveItem(sub.title)}
                            className="block text-gray-600 text-xs cursor-pointer px-2 py-1 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            {sub.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
