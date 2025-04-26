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
} from "lucide-react";
import { usePage } from "@inertiajs/react"; // Import the usePage hook
import NavItem from "./NavItem"; // Import the NavItem component
import ToggleButton from "./ToggleButton";
import SideBarFooter from "./SidebarFooter";

// Define the menu items
const menuItems = [
    { title: "Dashboard", href: route('dashboard'), icon: Home, sub: ['add', 'delete'] },
    { title: "Category", href: route('categories.index'), icon: Layers, sub: [{title: 'add', href:'delete'}] },
    { title: "Products", href: route('produits.index'), icon: Box, sub: [] },
    { title: "Suppliers", href: route('fournisseurs.index'), icon: Truck, sub: [] },
    { title: "Clients", href: route('clients.index'), icon: Users, sub: [] },
    { title: "Stocks", href: route('stocks.index'), icon: TrendingUp, sub: [] },
    { title: "Settings", href: route('profile.edit'), icon: Settings, sub: [] },
    { title: "Notifications", href: "#", icon: Bell, sub: [] },
];

export default function SidebarLayout({ children }) {
    const [expanded, setExpanded] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeItem, setActiveItem] = useState("");
    const { url } = usePage();
    

    useEffect(() => {
        const currentItem = menuItems.find((item) => {
            // Create a temporary anchor to parse the route URL and get the pathname
            const tempLink = document.createElement('a');
            tempLink.href = item.href;
            const itemPath = tempLink.pathname;
    
            return url === itemPath || url.startsWith(itemPath + '/');
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
        <div className="flex h-screen bg-[#e5e9ec]">
            {/* Sidebar */}
            <div className={`flex flex-col justify-between bg-[#fbfbfb]  p-4 mt-4 ml-4 mb-4 rounded-lg transition-all duration-1000 ${expanded ? "w-64" : "w-16"}`}>
                {/* Menu items */}
                <nav>
                    {menuItems.map((item) => {
                        return (
                            <NavItem
                                key={item.title}
                                item={item}
                                expanded={expanded}
                                active={activeItem === item.title}
                                isOpen={openDropdown === item.title}
                                onToggleDropdown={toggleDropdown}
                                setActiveItem={setActiveItem}
                            />
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <SideBarFooter expanded={expanded} setExpanded={setExpanded} href={route('logout')}/>
            </div>

            {/* Toggle Button */}
            <ToggleButton expanded={expanded} setExpanded={setExpanded} />
            
            {/* Main Content */}
            {children}
        </div>
    );
}
