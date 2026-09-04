import {
    IndianRupee,
    BriefcaseBusiness,
    TrendingUp,
    TriangleAlert,
} from "lucide-react";

export const districtSidebar = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "works", label: "Works", icon: "works" },
    { id: "alerts", label: "Alerts", icon: "alerts" },
    { id: "analytics", label: "Analytics", icon: "analytics" },
    { id: "reports", label: "Reports", icon: "reports" },
    { id: "map", label: "Map", icon: "map" },
];

export const districtStats = [
    {
        title: "Total Works",
        value: "1,284",
        change: "+7.2%",
        description: "this year",
        icon: BriefcaseBusiness,
        variant: "blue",
    },
    {
        title: "Funds Utilized",
        value: "₹218 Cr",
        change: "+11.5%",
        description: "vs last year",
        icon: IndianRupee,
        variant: "green",
    },
    {
        title: "Completion Rate",
        value: "79.8%",
        change: "+6.1%",
        description: "overall",
        icon: TrendingUp,
        variant: "purple",
    },
    {
        title: "Delayed Works",
        value: "38",
        change: "-4.6%",
        description: "requires attention",
        icon: TriangleAlert,
        variant: "red",
    },
];