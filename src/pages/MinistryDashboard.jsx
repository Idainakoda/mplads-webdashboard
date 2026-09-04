import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import SectionCard from "../components/dashboard/SectionCard";
import {
    ministrySidebar,
    ministryStats,
} from "../data/ministryDashboard";

function MinistryDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <DashboardLayout
            sidebarItems={ministrySidebar}
            role="Central Authority"
            title="National Dashboard"
            subtitle="MPLADS monitoring across India"
            userName="Central Administrator"
            onLogout={handleLogout}
        >
            <div className="space-y-8">
                <div>
                    <p className="text-sm text-slate-500">
                        Welcome back
                    </p>

                    <h1 className="text-3xl font-bold text-[#092d52] mt-1">
                        India-wide MPLADS Overview
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {ministryStats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            {...stat}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <SectionCard
                        title="Expenditure Overview"
                        subtitle="National fund utilization"
                    >
                        <div className="h-64 flex items-center justify-center rounded-xl bg-slate-50">
                            <p className="text-slate-400">
                                Expenditure chart will be added here
                            </p>
                        </div>
                    </SectionCard>

                    <SectionCard
                        title="State Performance"
                        subtitle="Compare MPLADS implementation across states"
                    >
                        <div className="space-y-4">
                            {[
                                ["Maharashtra", "92%"],
                                ["Uttar Pradesh", "87%"],
                                ["Karnataka", "81%"],
                                ["Madhya Pradesh", "76%"],
                            ].map(([state, progress]) => (
                                <div key={state}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-slate-700">
                                            {state}
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
                </div>

                <SectionCard
                    title="Recent High-Risk Works"
                    subtitle="Works requiring ministry-level attention"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-100">
                                    <th className="pb-3 font-medium">Work</th>
                                    <th className="pb-3 font-medium">State</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Risk</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["Community Health Centre", "Maharashtra", "Delayed", "High"],
                                    ["Rural Road Development", "Uttar Pradesh", "Under Review", "High"],
                                    ["School Infrastructure", "Bihar", "Payment Issue", "Medium"],
                                ].map((work) => (
                                    <tr
                                        key={work[0]}
                                        className="border-b border-slate-50 last:border-0"
                                    >
                                        <td className="py-4 font-medium text-slate-700">
                                            {work[0]}
                                        </td>

                                        <td className="py-4 text-slate-500">
                                            {work[1]}
                                        </td>

                                        <td className="py-4 text-slate-500">
                                            {work[2]}
                                        </td>

                                        <td className="py-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600">
                                                {work[3]}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </SectionCard>
            </div>
        </DashboardLayout>
    );
}

export default MinistryDashboard;