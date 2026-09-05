import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function ExpenditureOverview({
    title = "Expenditure Overview",
    subtitle = "India-wide fund utilization",
    utilized = 4286,
    total = 5468,
}) {
    const remaining = total - utilized;
    const utilization = ((utilized / total) * 100).toFixed(1);

    const data = [
        { name: "Utilized", value: utilized },
        { name: "Remaining", value: remaining },
    ];

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-bold text-[#092d52]">{title}</h3>
                <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
            </div>

            <div className="p-6">
                <div className="h-64 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={75}
                                outerRadius={100}
                                paddingAngle={2}
                                startAngle={90}
                                endAngle={-270}
                            >
                                <Cell fill="#0b4f8a" />
                                <Cell fill="#e2e8f0" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-bold text-[#092d52]">
                            {utilization}%
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                            Utilized
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-[#0b4f8a]" />
                        <div>
                            <p className="text-xs text-slate-400">Utilized</p>
                            <p className="text-sm font-semibold text-slate-700">
                                ₹{utilized.toLocaleString("en-IN")} Cr
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-slate-200" />
                        <div>
                            <p className="text-xs text-slate-400">Remaining</p>
                            <p className="text-sm font-semibold text-slate-700">
                                ₹{remaining.toLocaleString("en-IN")} Cr
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenditureOverview;