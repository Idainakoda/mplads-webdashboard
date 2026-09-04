import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import SectionCard from "../components/dashboard/SectionCard";
import {
    stateSidebar,
    stateStats,
} from "../data/stateDashboard";

function StateDashboard() {
    const navigate = useNavigate();

    const districts = [
        ["Indore", "91%"],
        ["Bhopal", "87%"],
        ["Jabalpur", "82%"],
        ["Gwalior", "76%"],
    ];

    const recentWorks = [
        ["Community Health Centre", "Indore", "Under Construction", "Medium"],
        ["Government School", "Bhopal", "Completed", "Low"],
        ["Rural Road Development", "Jabalpur", "Delayed", "High"],
        ["Drinking Water Project", "Gwalior", "Under Review", "Medium"],
    ];

    const riskStyles = {
        High: "bg-red-50 text-red-600",
        Medium: "bg-orange-50 text-orange-600",
        Low: "bg-emerald-50 text-emerald-600",
    };

    return (
        <DashboardLayout
            sidebarItems={stateSidebar}
            role="State Authority (SNA)"
            title="State Dashboard"
            subtitle="MPLADS monitoring across districts"
            userName="State Administrator"
            onLogout={() => navigate("/")}
        >
            <div className="space-y-8">
                <div>
                    <p className="text-sm text-slate-500">Welcome back</p>
                    <h1 className="text-3xl font-bold text-[#092d52] mt-1">
                        State-wide MPLADS Overview
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Monitor works, expenditure and implementation across your state.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {stateStats.map((stat) => (
                        <StatCard key={stat.title} {...stat} />
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <SectionCard
                        title="District Performance"
                        subtitle="Implementation progress across districts"
                    >
                        <div className="space-y-5">
                            {districts.map(([district, progress]) => (
                                <div key={district}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-slate-700">
                                            {district}
                                        </span>
                                        <span className="text-slate-500">
                                            {progress}
                                        </span>
                                    </div>

                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#0b4f8a] rounded-full"
                                            style={{ width: progress }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    <SectionCard
                        title="State Expenditure"
                        subtitle="Fund utilization overview"
                    >
                        <div className="h-64 flex items-center justify-center rounded-xl bg-slate-50">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-[#092d52]">
                                    ₹1,184 Cr
                                </p>
                                <p className="text-sm text-slate-400 mt-2">
                                    Total funds utilized
                                </p>
                                <div className="mt-5 w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500 rounded-full"
                                        style={{ width: "82%" }}
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-2">
                                    82% utilization
                                </p>
                            </div>
                        </div>
                    </SectionCard>
                </div>

                <SectionCard
                    title="Recent Works"
                    subtitle="Latest MPLADS works across the state"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-100">
                                    <th className="pb-3 font-medium">Work</th>
                                    <th className="pb-3 font-medium">District</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Risk</th>
                                </tr>
                            </thead>

                            <tbody>
                                {recentWorks.map(
                                    ([work, district, status, risk]) => (
                                        <tr
                                            key={work}
                                            className="border-b border-slate-50 last:border-0"
                                        >
                                            <td className="py-4 font-medium text-slate-700">
                                                {work}
                                            </td>

                                            <td className="py-4 text-slate-500">
                                                {district}
                                            </td>

                                            <td className="py-4 text-slate-500">
                                                {status}
                                            </td>

                                            <td className="py-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${riskStyles[risk]}`}
                                                >
                                                    {risk}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </SectionCard>
            </div>
        </DashboardLayout>
    );
}

export default StateDashboard;