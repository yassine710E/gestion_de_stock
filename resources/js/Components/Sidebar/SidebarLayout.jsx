import React, { useState, useEffect } from "react";
import {
    Home,
    Layers,
    Box,
    Truck,
    Users,
    TrendingUp,
    Settings,
    Bell,
    Package,
    Boxes,
    HandCoins,
    BookUser,
} from "lucide-react";
import { usePage } from "@inertiajs/react"; // Import the usePage hook
import NavItem from "./NavItem"; // Import the NavItem component
import ToggleButton from "./ToggleButton";
import SideBarFooter from "./SidebarFooter";

// Define the menu items
const menuItems = [
    {
        title: "Dashboard",
        href: route("dashboard"),
        icon: Home,
        sub: [],
    },
    {
        title: "Category",
        href: route("categories.index"),
        icon: Layers,
        sub: [],
    },
    { title: "Products", href: route("produits.index"), icon: Package, sub: [] },
    {
        title: "Suppliers",
        href: route("fournisseurs.index"),
        icon: Truck,
        sub: [],
    },
    { title: "Clients", href: route("clients.index"), icon: Users, sub: [] },
    { title: "Stocks", href: route("stocks.index"), icon: Boxes, sub: [] },
    { title: "Client Commands", href: route("commands.index"), icon: BookUser, sub: [] },
    { title: "Supplier Commands", href: route("fourniCommands.index"), icon: HandCoins, sub: [] },
    { title: "Settings", href: route("profile.edit"), icon: Settings, sub: [] },
    { title: "Notifications", href: "#", icon: Bell, sub: [] },
];

export default function SidebarLayout({ children }) {
    // Initialize expanded state from localStorage, default to false if not found
    const [expanded, setExpanded] = useState(() => {
        const savedState = localStorage.getItem("sidebarExpanded");
        return savedState ? JSON.parse(savedState) : false;
    });
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeItem, setActiveItem] = useState("");
    const { url } = usePage();

    // Update localStorage whenever expanded state changes
    useEffect(() => {
        localStorage.setItem("sidebarExpanded", JSON.stringify(expanded));
    }, [expanded]);

    useEffect(() => {
        const currentItem = menuItems.find((item) => {
            // Create a temporary anchor to parse the route URL and get the pathname
            const tempLink = document.createElement("a");
            tempLink.href = item.href;
            const itemPath = tempLink.pathname;

            return url === itemPath || url.startsWith(itemPath + "/");
        });

        if (currentItem) {
            setActiveItem(currentItem.title);
        }
    }, [url]);

    // Toggle dropdown state
    const toggleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <background className="flex h-screen bg-[#e5e9ec]">
            <aside className="m-3 flex flex-col h-[calc(100vh-1.5rem)]">
                <div
                    className={`transition-all duration-1000 ${
                        expanded ? "w-64" : "w-16"
                    }`}
                >
                    <ToggleButton
                        expanded={expanded}
                        setExpanded={setExpanded}
                    />
                </div>

                {/* Sidebar - adding flex-1 to take remaining space */}
                <div className={`mt-3 flex-1 flex flex-col justify-between bg-[#fbfbfb] p-4 rounded-lg transition-all duration-1000 ${expanded ? "w-64" : "w-16"}`}>
                    {/* Menu items */}
                    <nav className="flex-1">
                        {menuItems.map((item) => (
                            <NavItem
                                key={item.title}
                                item={item}
                                expanded={expanded}
                                active={activeItem === item.title}
                                isOpen={openDropdown === item.title}
                                onToggleDropdown={toggleDropdown}
                                setActiveItem={setActiveItem}
                            />
                        ))}
                    </nav>

                    {/* Logout Button */}
                    <SideBarFooter
                        expanded={expanded}
                        setExpanded={setExpanded}
                        href={route("logout")}
                    />
                </div>
            </aside>

            {/* Main Content */}

            <main className="flex-1 mt-3 mr-3 mb-3 bg-[hsl(0,0%,97%)] rounded-lg overflow-auto">
                {children}
            </main>
        </background>
    );
}
