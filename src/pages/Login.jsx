import { useState } from "react";
import { Lock, Mail, ArrowLeft, ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import emblemImage from "../images/emblem.avif";

const roleNames = {
    ministry: "Ministry Authority",
    state: "State Authority (SNA)",
    district: "District Authority",
    mp: "Member of Parliament",
};

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedRole = location.state?.role || "ministry";
    const roleName = roleNames[selectedRole];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (selectedRole === "ministry") {
            navigate("/dashboard/ministry");
        }

        if (selectedRole === "state") {
            navigate("/dashboard/state");
        }

        if (selectedRole === "district") {
            navigate("/dashboard/district");
        }

        if (selectedRole === "mp") {
            navigate("/dashboard/mp");
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f8fc] flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="grid md:grid-cols-2">
                    <div className="hidden md:flex relative bg-[#092d52] text-white p-12 flex-col justify-between overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-400/10" />
                        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-blue-400/10" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4">
                                <img
                                    src={emblemImage}
                                    alt="Government of India Emblem"
                                    className="w-16 h-20 object-contain"
                                />

                                <div>
                                    <p className="font-semibold text-lg">
                                        Government of India
                                    </p>
                                    <p className="text-sm text-white/70">
                                        Prototype Implementation
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <p className="text-sm tracking-[0.3em] uppercase text-blue-300 mb-4">
                                MPLADS Monitor
                            </p>

                            <h1 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                                Transparent
                                <br />
                                Governance.
                            </h1>

                            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
                                Secure access to your role-based monitoring
                                dashboard for MPLADS works, expenditure and
                                progress.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center gap-3 text-sm text-white/60">
                            <ShieldCheck size={20} />
                            <span>Secure Role-Based Access</span>
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 lg:p-12">
                        <button
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition mb-10"
                        >
                            <ArrowLeft size={18} />
                            Back to Role Selection
                        </button>

                        <div className="mb-8">
                            <p className="text-[#0b4f8a] tracking-[0.25em] text-xs font-semibold uppercase mb-3">
                                Secure Access
                            </p>

                            <h2 className="text-4xl font-serif font-bold text-[#092d52]">
                                Welcome Back
                            </h2>

                            <p className="mt-3 text-slate-500">
                                Sign in to access your MPLADS dashboard.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-7">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Selected Role
                            </p>

                            <p className="mt-1 text-blue-700 font-semibold">
                                {roleName}
                            </p>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter your password"
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 border border-slate-300 rounded-xl outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end mb-7">
                                <button
                                    type="button"
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                    onClick={() =>
                                        console.log("Forgot password")
                                    }
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0b4f8a] hover:bg-[#083c69] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="relative flex items-center gap-4 my-7">
                            <div className="flex-1 h-px bg-slate-200" />
                            <span className="text-xs text-slate-400 uppercase tracking-wider">
                                New User
                            </span>
                            <div className="flex-1 h-px bg-slate-200" />
                        </div>

                        <button
                            onClick={() => console.log("Register clicked")}
                            className="w-full border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 font-semibold py-3.5 rounded-xl transition"
                        >
                            Create an Account
                        </button>

                        <p className="text-center text-xs text-slate-400 mt-8 leading-relaxed">
                            Authorized access only. Your selected role
                            determines the dashboard and information available
                            to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;