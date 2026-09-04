import {
    IndianRupee,
    BriefcaseBusiness,
    TrendingUp,
    TriangleAlert,
} from "lucide-react";

export const stateSidebar = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "districts", label: "Districts", icon: "districts" },
    { id: "mps", label: "MPs", icon: "mps" },
    { id: "works", label: "Works", icon: "works" },
    { id: "alerts", label: "Alerts", icon: "alerts" },
    { id: "analytics", label: "Analytics", icon: "analytics" },
    { id: "map", label: "Map", icon: "map" },
];

export const stateStats = [
    {
        title: "Total Works",
        value: "6,842",
        change: "+6.8%",
        description: "this year",
        icon: BriefcaseBusiness,
        variant: "blue",
    },
    {
        title: "Funds Utilized",
        value: "₹1,184 Cr",
        change: "+9.4%",
        description: "vs last year",
        icon: IndianRupee,
        variant: "green",
    },
    {
        title: "Completion Rate",
        value: "82.6%",
        change: "+4.7%",
        description: "overall",
        icon: TrendingUp,
        variant: "purple",
    },
    {
        title: "High Risk Works",
        value: "124",
        change: "-5.3%",
        description: "requires attention",
        icon: TriangleAlert,
        variant: "red",
    },
];