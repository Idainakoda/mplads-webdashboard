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
    "Ministry Authority": {
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

function DashboardSidebar({ items, role, onLogout }) {
    const info = roleInfo[role] || roleInfo["Ministry Authority"];

    return (
        <aside className="w-64 h-screen sticky top-0 bg-[#092d52] text-white flex flex-col shrink-0">
            <div className="px-6 py-7 border-b border-white/10 shrink-0">
                <h1 className="text-xl font-bold">
                    MPLADS <span className="text-blue-300">Monitor</span>
                </h1>

                <p className="text-xs text-white/50 mt-1">
                    {role}
                </p>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {items.map((item) => {
                    const Icon = iconMap[item.icon] || LayoutDashboard;

                    return (
                        <button
                            key={item.id}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
                        >
                            <Icon size={19} />
                            <span>{item.label}</span>
                        </button>
                    );
                })}

            </nav>


            <div className="px-4 pb-5 pt-1">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-red-500/15 hover:text-red-300 transition"
                >
                    <LogOut size={19} />
                    <span>Logout</span>
                </button>
            </div>

            <div className="shrink-0">
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
                            {info.lines.map((line) => (
                                <p
                                    key={line}
                                    className="text-xs text-white/70 leading-4"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default DashboardSidebar;