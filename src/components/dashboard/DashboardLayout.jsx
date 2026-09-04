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
    return (
        <div className="min-h-screen bg-[#f4f8fc] flex">
            <DashboardSidebar
                items={sidebarItems}
                role={role}
                onLogout={onLogout}
            />

            <div className="flex-1 min-w-0">
                <DashboardHeader
                    title={title}
                    subtitle={subtitle}
                    userName={userName}
                />

                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;