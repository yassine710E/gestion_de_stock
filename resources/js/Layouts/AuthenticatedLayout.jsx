
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    Home,
    Layers,
    Box,
    Truck,
    Users,
    TrendingUp,
    Settings,
    Bell,
    Sidebar,
} from "lucide-react";
import SidebarLayout from '@/Components/Sidebar/SidebarLayout';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <SidebarLayout >
            <div className="flex-1 overflow-auto">
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                
                {children}
            </div>
        </SidebarLayout>
    );
}
