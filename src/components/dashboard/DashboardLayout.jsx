import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

function DashboardLayout({
    sidebarItems,
    role,
    title,
    subtitle,
    userName,
    onLogout,
    children,
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f4f8fc] flex">
            <DashboardSidebar
                items={sidebarItems}
                role={role}
                userName={userName}
                onLogout={onLogout}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 min-w-0">
                <DashboardHeader
                    title={title}
                    subtitle={subtitle}
                    userName={userName}
                    onMenu={() => setSidebarOpen(true)}
                />

                <main className="p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;