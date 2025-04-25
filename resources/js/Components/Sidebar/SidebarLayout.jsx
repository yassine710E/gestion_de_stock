import React, { useState } from "react";
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
import NavItem from "./NavItem"; // Import the NavItem component
import ToggleButton from "./ToggleButton";
import SideBarFooter from "./SidebarFooter";

// Define the menu items
const menuItems = [
    { title: "Dashboard", icon: Home, sub: [] },
    { title: "Category", icon: Layers, sub: ["Add Category", "View Categories"] },
    { title: "Products", icon: Box, sub: ["Add Product", "View Products"] },
    { title: "Suppliers", icon: Truck, sub: ["Add Supplier", "View Suppliers"] },
    { title: "Clients", icon: Users, sub: ["Add Client", "View Clients"] },
    { title: "Stocks", icon: TrendingUp, sub: ["Stock Overview", "Reorder"] },
    { title: "Notifications", icon: Bell, sub: [] },
    { title: "Settings", icon: Settings, sub: [] },
];

export default function SidebarLayout() {
    const [expanded, setExpanded] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeItem, setActiveItem] = useState("Dashboard");

    // Toggle dropdown state
    const toggleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <div className="flex h-screen bg-[#e5e9ec]">
            {/* Sidebar */}
            <div className={`flex flex-col justify-between bg-[#fbfbfb] p-4 mt-4 ml-4 mb-4 rounded-lg transition-all duration-1000 ${expanded ? "w-64" : "w-16"}`}>
                {/* Menu items */}
                <nav>
                    {menuItems.map((item) => (
                        <NavItem
                            key={item.title}
                            item={item}
                            expanded={expanded}
                            isActive={activeItem === item.title}
                            isOpen={openDropdown === item.title}
                            onToggleDropdown={toggleDropdown}
                            setActiveItem={setActiveItem}
                        />
                    ))}
                </nav>

                {/* Logout Button */}
                <SideBarFooter expanded={expanded} setExpanded={setExpanded}/>
            </div>

            {/* Toggle Button */}
            <ToggleButton expanded={expanded} setExpanded={setExpanded} />

            {/* Main Content */}
            <main className="flex-1 p-6 mt-4 mr-4 mb-4 bg-[#fbfbfb] rounded-lg overflow-auto">
                <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
                <p>Welcome to the main section! Place your components and content here.</p>
            </main>
        </div>
    );
}