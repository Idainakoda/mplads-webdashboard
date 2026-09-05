import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import SectionCard from "../components/dashboard/SectionCard";
import {
    districtSidebar,
    districtStats,
} from "../data/districtDashboard";
import ExpenditureOverview from "../components/dashboard/ExpenditureOverview";

function DistrictDashboard() {
    const navigate = useNavigate();

    const workProgress = [
        ["Completed", "58%", "bg-emerald-500"],
        ["Under Construction", "27%", "bg-blue-500"],
        ["Under Review", "9%", "bg-orange-500"],
        ["Delayed", "6%", "bg-red-500"],
    ];

    const recentWorks = [
        ["Primary Health Centre", "₹4.8 Cr", "Completed", "Low"],
        ["Government School Building", "₹3.2 Cr", "Under Construction", "Low"],
        ["Rural Road Development", "₹6.5 Cr", "Delayed", "High"],
        ["Community Hall", "₹2.1 Cr", "Under Review", "Medium"],
    ];

    const riskStyles = {
        High: "bg-red-50 text-red-600",
        Medium: "bg-orange-50 text-orange-600",
        Low: "bg-emerald-50 text-emerald-600",
    };

    return (
        <DashboardLayout
            sidebarItems={districtSidebar}
            role="District Authority"
            title="District Dashboard"
            subtitle="MPLADS implementation monitoring"
            userName="District Administrator"
            onLogout={() => navigate("/")}
        >
            <div className="space-y-8">
                <div>
                    <p className="text-sm text-slate-500">Welcome back</p>

                    <h1 className="text-3xl font-bold text-[#092d52] mt-1">
                        District MPLADS Overview
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Monitor implementation, expenditure and progress of MPLADS works.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {districtStats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            {...stat}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <SectionCard
                        title="Work Progress"
                        subtitle="Current implementation status"
                    >
                        <div className="space-y-5">
                            {workProgress.map(([status, progress, bar]) => (
                                <div key={status}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-slate-700">
                                            {status}
                                        </span>

                                        <span className="text-slate-500">
                                            {progress}
                                        </span>
                                    </div>

                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${bar} rounded-full`}
                                            style={{ width: progress }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    <ExpenditureOverview
                        title="District Fund Utilization"
                        subtitle="District-wide MPLADS fund utilization"
                        utilized={218}
                        total={273}
                        growth={3.6}
                    />
                </div>

                <SectionCard
                    title="Recent Works"
                    subtitle="Latest MPLADS works in the district"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-100">
                                    <th className="pb-3 font-medium">
                                        Work
                                    </th>

                                    <th className="pb-3 font-medium">
                                        Amount
                                    </th>

                                    <th className="pb-3 font-medium">
                                        Status
                                    </th>

                                    <th className="pb-3 font-medium">
                                        Risk
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {recentWorks.map(
                                    ([work, amount, status, risk]) => (
                                        <tr
                                            key={work}
                                            className="border-b border-slate-50 last:border-0"
                                        >
                                            <td className="py-4 font-medium text-slate-700">
                                                {work}
                                            </td>

                                            <td className="py-4 text-slate-500">
                                                {amount}
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

export default DistrictDashboard;