function StatCard({ title, value, change, description, icon: Icon, variant = "blue" }) {
    const variants = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-emerald-50 text-emerald-600",
        orange: "bg-orange-50 text-orange-600",
        red: "bg-red-50 text-red-600",
        purple: "bg-purple-50 text-purple-600",
    };

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-slate-500">
                        {title}
                    </p>

                    <h3 className="text-3xl font-bold text-[#092d52] mt-2">
                        {value}
                    </h3>
                </div>

                {Icon && (
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${variants[variant]}`}>
                        <Icon size={21} />
                    </div>
                )}
            </div>

            {(change || description) && (
                <div className="mt-4 flex items-center gap-2 text-xs">
                    {change && (
                        <span className="font-semibold text-emerald-600">
                            {change}
                        </span>
                    )}

                    {description && (
                        <span className="text-slate-400">
                            {description}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default StatCard;