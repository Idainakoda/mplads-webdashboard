import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    User,
    Mail,
    Phone,
    Badge,
    BriefcaseBusiness,
    Building2,
    Lock,
    Upload,
    ShieldCheck,
} from "lucide-react";
import registrationBg from "../images/registrationbg.jpg";

function Registration() {
    const location = useLocation();
    const navigate = useNavigate();

    const selectedRole = location.state?.role || "ministry";

    const roleNames = {
        ministry: "Central Authority",
        state: "State Authority",
        district: "District Authority",
        mp: "Member of Parliament",
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        employeeId: "",
        designation: "",
        department: "",
        state: "",
        district: "",
        constituency: "",
        password: "",
        confirmPassword: "",
        document: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const applicationId = `MPLADS-${new Date().getFullYear()}-${Math.floor(
            100000 + Math.random() * 900000
        )}`;

        const submittedAt = new Date().toISOString();

        console.log("Registration data:", {
            role: selectedRole,
            ...formData,
        });

        navigate("/registration-success", {
            state: {
                role: selectedRole,
                email: formData.email,
                applicationId,
                submittedAt,
            },
        });
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${registrationBg})`,
                }}
            />

            <div className="fixed inset-0 bg-white/75 backdrop-blur-[2px]" />

            <div className="relative z-10 w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-[#092d52] text-white px-6 sm:px-10 py-7">
                    <button
                        onClick={() =>
                            navigate("/login", {
                                state: { role: selectedRole },
                            })
                        }
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition mb-6"
                    >
                        <ArrowLeft size={18} />
                        Back to Login
                    </button>

                    <div className="flex items-center gap-3">
                        <ShieldCheck
                            size={28}
                            className="text-blue-300"
                        />

                        <div>
                            <p className="text-xs tracking-[0.25em] text-blue-300 uppercase">
                                Account Registration
                            </p>

                            <h1 className="text-2xl sm:text-3xl font-bold mt-1">
                                {roleNames[selectedRole]}
                            </h1>
                        </div>
                    </div>

                    <p className="text-sm text-white/60 mt-3">
                        Register your official account to access the 
                        Paardarshi platform.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-6 sm:p-10"
                >
                    <div className="mb-8">
                        <h2 className="text-lg font-bold text-[#092d52]">
                            Personal & Official Information
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Enter your official details as provided by your
                            department.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Full Name
                            </label>

                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Official Email
                            </label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="official@email.gov.in"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Mobile Number
                            </label>

                            <div className="relative">
                                <Phone
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter mobile number"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Official / Employee ID
                            </label>

                            <div className="relative">
                                <Badge
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    name="employeeId"
                                    value={formData.employeeId}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter official ID"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Designation
                            </label>

                            <div className="relative">
                                <BriefcaseBusiness
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter designation"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Department / Office
                            </label>

                            <div className="relative">
                                <Building2
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter department / office"
                                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {(selectedRole === "state" ||
                        selectedRole === "district" ||
                        selectedRole === "mp") && (
                        <div className="mt-10 pt-8 border-t border-slate-100">
                            <h2 className="text-lg font-bold text-[#092d52]">
                                Role-Specific Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        State
                                    </label>

                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">
                                            Select State
                                        </option>
                                        <option>Maharashtra</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Karnataka</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Bihar</option>
                                    </select>
                                </div>

                                {selectedRole === "district" && (
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            District
                                        </label>

                                        <input
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter district"
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                )}

                                {selectedRole === "mp" && (
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Parliamentary Constituency
                                        </label>

                                        <input
                                            name="constituency"
                                            value={formData.constituency}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter parliamentary constituency"
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="mt-10 pt-8 border-t border-slate-100">
                        <h2 className="text-lg font-bold text-[#092d52]">
                            Account Security
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Create password"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        placeholder="Confirm password"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100">
                        <h2 className="text-lg font-bold text-[#092d52]">
                            Government Authorization
                        </h2>

                        <label className="block text-sm font-medium text-slate-700 mt-5 mb-2">
                            Government ID / Authorization Document
                        </label>

                        <label className="flex flex-col items-center justify-center w-full min-h-32 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition">
                            <Upload
                                size={24}
                                className="text-slate-400"
                            />

                            <p className="text-sm font-medium text-slate-600 mt-2">
                                {formData.document
                                    ? formData.document.name
                                    : "Upload authorization document"}
                            </p>

                            <p className="text-xs text-slate-400 mt-1">
                                PDF, JPG or PNG
                            </p>

                            <input
                                type="file"
                                name="document"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleChange}
                                required
                                className="hidden"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-8 py-3.5 rounded-xl bg-[#0b4f8a] hover:bg-[#083d6b] text-white font-semibold transition shadow-sm"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-5">
                        Your registration will be subject to official
                        verification.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Registration;