import { Bell, Search } from "lucide-react";

function DashboardHeader({ title, subtitle, userName }) {
    return (
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold text-[#092d52]">
                    {title}
                </h2>

                {subtitle && (
                    <p className="text-sm text-slate-500 mt-1">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-5">
                <button
                    className="text-slate-500 hover:text-blue-600 transition"
                    aria-label="Search"
                >
                    <Search size={22} strokeWidth={1.8} />
                </button>

                <button
                    className="relative text-slate-500 hover:text-blue-600 transition"
                    aria-label="Notifications"
                >
                    <Bell size={22} strokeWidth={1.8} />

                    <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                        12
                    </span>
                </button>

                <div className="flex items-center gap-3 pl-5 border-l border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        {userName?.charAt(0) || "A"}
                    </div>

                    <div className="hidden lg:block">
                        <p className="text-sm font-semibold text-slate-700">
                            {userName || "Administrator"}
                        </p>

                        <p className="text-xs text-slate-400">
                            Authorized User
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;