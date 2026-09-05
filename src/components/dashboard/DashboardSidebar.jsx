import {
    LayoutDashboard,
    Map,
    Users,
    BriefcaseBusiness,
    Bell,
    BarChart3,
    MapPinned,
    Settings,
    LogOut,
    Building2,
    FileText,
    WalletCards,
    TrendingUp,
} from "lucide-react";

import parliamentImage from "../../images/footer-image.jpg";

const iconMap = {
    dashboard: LayoutDashboard,
    states: Map,
    districts: Building2,
    mps: Users,
    works: BriefcaseBusiness,
    alerts: Bell,
    analytics: BarChart3,
    map: MapPinned,
    reports: FileText,
    expenditure: WalletCards,
    progress: TrendingUp,
    settings: Settings,
};

const roleInfo = {
    "Central Authority": {
        location: "Government of India",
        lines: [
            "National MPLADS Monitoring",
            "Transparent Governance",
            "Better Development",
        ],
    },

    "State Authority (SNA)": {
        location: "",
        lines: [
            "Development at the",
            "Last Mile For a stronger India",
            "",
            "",
        ],
    },

    "District Authority": {
        location: "",
        lines: [
            "District Governance",
            "Local Infrastructure",
            "Community Progress",
        ],
    },

    "Member of Parliament": {
        location: "Parliamentary Constituency",
        lines: [
            "Constituency Development",
            "Public Infrastructure",
            "Community Welfare",
        ],
    },
};

function DashboardSidebar({
    items,
    role,
    userName,
    onLogout,
    isOpen,
    onClose,
}) {
    const info =
        roleInfo[role] || roleInfo["Central Authority"];

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            <aside
                className={`fixed lg:sticky top-0 left-0 z-50 w-72 lg:w-64 h-screen bg-[#092d52] text-white flex flex-col shrink-0 transform transition-transform duration-300 ease-out lg:translate-x-0 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="px-6 py-6 border-b border-white/10 shrink-0">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">
                                MPLADS{" "}
                                <span className="text-blue-300">
                                    Monitor
                                </span>
                            </h1>

                            <p className="text-xs text-white/50 mt-1">
                                {role}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            className="lg:hidden w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition"
                            aria-label="Close navigation"
                        >
                            ×
                        </button>
                    </div>
                </div>

                <div className="px-5 py-5 border-b border-white/10 shrink-0 lg:hidden">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                            {userName?.charAt(0) || "A"}
                        </div>

                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-white truncate">
                                {userName || "Administrator"}
                            </p>

                            <p className="text-xs text-white/50 mt-0.5">
                                Authorized User
                            </p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                    {items.map((item) => {
                        const Icon =
                            iconMap[item.icon] || LayoutDashboard;

                        return (
                            <button
                                key={item.id}
                                onClick={onClose}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
                            >
                                <Icon size={19} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="relative shrink-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-100"
                        style={{
                            backgroundImage: `url(${parliamentImage})`,
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#092d52] via-[#092d52]/85 to-[#092d52]/65" />

                    <div className="relative px-5 pt-20 pb-5">
                        <p className="text-sm font-medium text-white">
                            {info.location}
                        </p>

                        <div className="mt-1">
                            {info.lines.map((line, index) => (
                                <p
                                    key={`${line}-${index}`}
                                    className="text-xs text-white/70 leading-4"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="px-4 pb-5 pt-1">
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-red-500/15 hover:text-red-300 transition"
                    >
                        <LogOut size={19} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
}

export default DashboardSidebar;