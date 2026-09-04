import {
    IndianRupee,
    BriefcaseBusiness,
    TrendingUp,
    TriangleAlert,
} from "lucide-react";

export const ministrySidebar = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "states", label: "States", icon: "states" },
    { id: "mps", label: "MPs", icon: "mps" },
    { id: "works", label: "Works", icon: "works" },
    { id: "alerts", label: "Alerts", icon: "alerts" },
    { id: "analytics", label: "Analytics", icon: "analytics" },
    { id: "map", label: "Map", icon: "map" },
    { id: "settings", label: "Settings", icon: "settings" },
];

export const ministryStats = [
    {
        title: "Total Works",
        value: "24,680",
        change: "+8.4%",
        description: "this year",
        icon: BriefcaseBusiness,
        variant: "blue",
    },
    {
        title: "Funds Utilized",
        value: "₹4,286 Cr",
        change: "+12.6%",
        description: "vs last year",
        icon: IndianRupee,
        variant: "green",
    },
    {
        title: "Completion Rate",
        value: "78.4%",
        change: "+5.2%",
        description: "overall",
        icon: TrendingUp,
        variant: "purple",
    },
    {
        title: "High Risk Works",
        value: "486",
        change: "-7.8%",
        description: "requires attention",
        icon: TriangleAlert,
        variant: "red",
    },
];