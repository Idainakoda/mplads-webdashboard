import { Bell, Search, Menu } from "lucide-react";

function DashboardHeader({ title, subtitle, userName, onMenu }) {
    return (
        <header className="h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
                <button
                    onClick={onMenu}
                    className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 transition"
                    aria-label="Open navigation"
                >
                    <Menu size={23} />
                </button>

                <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#092d52] truncate">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 truncate">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                <button
                    className="text-slate-500 hover:text-blue-600 transition"
                    aria-label="Search"
                >
                    <Search size={21} strokeWidth={1.8} />
                </button>

                <button
                    className="relative text-slate-500 hover:text-blue-600 transition"
                    aria-label="Notifications"
                >
                    <Bell size={21} strokeWidth={1.8} />
                    <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                        12
                    </span>
                </button>

                <div className="flex items-center gap-3 pl-3 sm:pl-5 border-l border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                        {userName?.charAt(0) || "A"}
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-slate-700 whitespace-nowrap">
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