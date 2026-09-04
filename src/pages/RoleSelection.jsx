import { useEffect, useState } from "react";
import {
    Building2,
    Landmark,
    Map,
    Users,
    ArrowDown,
    BarChart3,
    ShieldCheck,
    Sprout,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import parliamentImage from "../images/parliament.png";

const roles = [
    {
        id: "ministry",
        title: "Ministry Authority",
        description: "National overview, policy monitoring and analytics",
        icon: Landmark,
        className: "ministry-card",
    },
    {
        id: "state",
        title: "State Authority (SNA)",
        description: "State level monitoring and coordination",
        icon: Map,
        className: "state-card",
    },
    {
        id: "district",
        title: "District Authority",
        description: "District level monitoring and implementation tracking",
        icon: Building2,
        className: "district-card",
    },
    {
        id: "mp",
        title: "Member of Parliament",
        description: "Your constituency works and progress",
        icon: Users,
        className: "mp-card",
    },
];

function RoleSelection() {
    const navigate = useNavigate();
    const [showHero, setShowHero] = useState(false);
    const [showRoles, setShowRoles] = useState(false);

    useEffect(() => {
        setShowHero(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShowRoles(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const rolesSection = document.getElementById("role-selection");

        if (rolesSection) {
            observer.observe(rolesSection);
        }

        return () => observer.disconnect();
    }, []);

    const handleRoleSelect = (role) => {
        console.log("Selected role:", role);

        navigate("/login", {
            state: {
                role,
            },
        });
    };

    const scrollToRoles = () => {
        document.getElementById("role-selection")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-[#f4f8fc]">
            <section
                className={`relative min-h-screen bg-cover bg-center flex flex-col transition-all duration-1000 ${showHero ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    backgroundImage: `url(${parliamentImage})`,
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/20" />

                <div className="relative z-10 flex-1 flex items-center">
                    <div className="w-full px-8 lg:px-16 pb-20">
                        <div
                            className={`max-w-4xl transition-all duration-1000 delay-200 ${showHero
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                        >
                            <p className="text-white/90 tracking-[0.35em] text-xs md:text-sm uppercase mb-5">
                                Transparent Funds. Stronger Communities. A Developed India.
                            </p>

                            <div className="flex items-center gap-1 mb-7">
                                <div className="w-20 h-1 bg-[#ff9933]" />
                                <div className="w-20 h-1 bg-white" />
                                <div className="w-20 h-1 bg-[#138808]" />
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white leading-[0.95]">
                                Welcome to
                                <br />
                                <span className="text-white">MPLADS</span>{" "}
                                <span className="text-blue-400">Monitor</span>
                            </h1>

                            <p className="mt-7 text-xl md:text-2xl text-white/90">
                                AI-Powered Monitoring Platform for MPLADS Works
                            </p>

                            <div className="flex flex-wrap gap-8 mt-10 text-white">
                                <div className="flex items-center gap-3">
                                    <BarChart3 size={25} />
                                    <span>Transparency</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={25} />
                                    <span>Accountability</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Building2 size={25} />
                                    <span>Development</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Sprout size={25} />
                                    <span>Stronger Communities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute right-8 lg:right-20 top-28 z-10 hidden lg:block max-w-xs text-white">
                    <p className="font-serif italic text-xl leading-relaxed">
                        “People's Participation
                        <br />
                        for a Developed
                        <br />
                        India.”
                    </p>
                    <p className="mt-4 text-sm">— MPLADS Monitor</p>
                </div>

                <button
                    onClick={scrollToRoles}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white group"
                >
                    <span className="text-sm mb-3 opacity-90">Scroll to explore</span>

                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                        <ArrowDown size={22} className="animate-bounce" />
                    </div>
                </button>
            </section>

            <section
                id="role-selection"
                className={`relative py-20 lg:py-24 px-6 overflow-hidden transition-all duration-1000 ${showRoles
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                    }`}
            >
                <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
                    <div className="absolute -left-20 top-20 text-[400px]">🏛️</div>
                    <div className="absolute -right-20 bottom-0 text-[400px]">🇮🇳</div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#0b4f8a] tracking-[0.35em] text-xs font-semibold uppercase mb-4">
                            Secure Access
                        </p>

                        <div className="flex justify-center items-center gap-1 mb-5">
                            <div className="w-12 h-0.5 bg-[#ff9933]" />
                            <div className="w-12 h-0.5 bg-slate-300" />
                            <div className="w-12 h-0.5 bg-[#138808]" />
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#092d52]">
                            Select Your Role
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg">
                            Access role-based dashboards and insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
                        {roles.map((role, index) => {
                            const Icon = role.icon;

                            return (
                                <button
                                    key={role.id}
                                    onClick={() => handleRoleSelect(role.id)}
                                    className={`role-card ${role.className}`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                                        <div className="role-icon">
                                            <Icon size={46} strokeWidth={1.8} />
                                        </div>

                                        <h3 className="text-xl font-bold mt-6">{role.title}</h3>

                                        <p className="mt-4 text-sm leading-relaxed max-w-55">
                                            {role.description}
                                        </p>

                                        <div className="role-arrow mt-auto">→</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-8">
                        <div className="w-14 h-px bg-slate-300" />

                        <p className="text-sm text-slate-500 text-center">
                            Your access level determines the dashboard and information
                            available to you.
                        </p>

                        <div className="w-14 h-px bg-slate-300" />
                    </div>
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="flex items-center gap-8">
                        <p className="font-bold text-[#092d52]">
                            MPLADS <span className="text-blue-600">Monitor</span>
                        </p>

                        <div className="hidden md:block text-sm text-slate-500">
                            <p>Ministry of Statistics & Programme Implementation</p>
                            <p>Government of India</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 text-sm text-slate-500">
                        <button className="hover:text-blue-600">Privacy Policy</button>
                        <span>|</span>
                        <button className="hover:text-blue-600">Terms of Use</button>
                        <span>|</span>
                        <button className="hover:text-blue-600">Contact Us</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default RoleSelection;