"use client";

import { usePathname } from "next/navigation";
import { Router } from "next/router";
import { useMemo } from "react";

interface Sidebarprops{
    children: React.ReactNode;
}

const Sidebar: React.FC<Sidebarprops> = ({children}) => {
    const pathname = usePathname();
    
    const routes = useMemo(() => [
    {
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
    },
    {
        label: "Search",
        active: pathname === '/search',
        href: '/search',
    }
    ], [pathname]);

    return (
        <div>
            {children}
        </div>
    );
}

export default Sidebar;