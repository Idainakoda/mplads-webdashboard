import {
    IndianRupee,
    BriefcaseBusiness,
    TrendingUp,
    TriangleAlert,
} from "lucide-react";

export const mpSidebar = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "works", label: "My Works", icon: "works" },
    { id: "expenditure", label: "Expenditure", icon: "expenditure" },
    { id: "progress", label: "Progress", icon: "progress" },
    { id: "alerts", label: "Alerts", icon: "alerts" },
    { id: "reports", label: "Reports", icon: "reports" },
];

export const mpStats = [
    {
        title: "Recommended Works",
        value: "186",
        change: "+12.4%",
        description: "this year",
        icon: BriefcaseBusiness,
        variant: "blue",
    },
    {
        title: "Funds Utilized",
        value: "₹28.6 Cr",
        change: "+14.2%",
        description: "this year",
        icon: IndianRupee,
        variant: "green",
    },
    {
        title: "Completion Rate",
        value: "84.7%",
        change: "+6.8%",
        description: "overall",
        icon: TrendingUp,
        variant: "purple",
    },
    {
        title: "Works Needing Attention",
        value: "14",
        change: "-8.2%",
        description: "requires attention",
        icon: TriangleAlert,
        variant: "red",
    },
];