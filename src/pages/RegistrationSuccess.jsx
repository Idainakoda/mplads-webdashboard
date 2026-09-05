import {
    Check,
    FileText,
    Clock3,
    ArrowLeft,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import registrationBg from "../images/registrationbg.jpg";

function RegistrationSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    const role = location.state?.role || "ministry";
    const email = location.state?.email || "your registered email";
    const applicationId =
        location.state?.applicationId || "MPLADS-2026-000000";
    const submittedAt =
        location.state?.submittedAt || new Date().toISOString();

    const submittedDate = new Date(submittedAt);

    const formattedDate = submittedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const formattedTime = submittedDate.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <div className="min-h-screen relative flex items-center justify-center px-4 py-8 sm:py-10 overflow-hidden">
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${registrationBg})`,
                }}
            />

            <div className="fixed inset-0 bg-white/75 backdrop-blur-[2px]" />

            <div className="relative z-10 w-full max-w-4xl bg-white/95 border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="px-5 sm:px-10 py-8 sm:py-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                        <Check size={38} strokeWidth={2.4} />
                    </div>

                    <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-[#092d52]">
                        Registration Submitted Successfully
                    </h1>

                    <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-7">
                        Your registration has been submitted successfully.
                        Your account is now pending verification. You will be
                        able to log in once your identity and authorization
                        have been verified. You will receive an email
                        notification at your registered email address after
                        the review is completed.
                    </p>

                    <div className="mt-8">
                        <div className="flex w-full h-1.5">
                            <div className="flex-1 bg-[#ff9933]" />
                            <div className="flex-1 bg-slate-100 border-y border-slate-200" />
                            <div className="flex-1 bg-[#138808]" />
                        </div>

                        <div className="py-4">
                            <p className="text-sm sm:text-lg tracking-[0.2em] uppercase font-semibold text-[#092d52]">
                                Account Pending Verification
                            </p>
                        </div>

                        <div className="flex w-full h-1.5">
                            <div className="flex-1 bg-[#ff9933]" />
                            <div className="flex-1 bg-slate-100 border-y border-slate-200" />
                            <div className="flex-1 bg-[#138808]" />
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-blue-50/90 border border-blue-100 p-5 flex items-center gap-4 text-left">
                            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                <FileText size={21} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-slate-500">
                                    Application ID
                                </p>

                                <p className="text-sm sm:text-base font-bold text-[#092d52] mt-1 break-all">
                                    {applicationId}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-amber-50/90 border border-amber-100 p-5 flex items-center gap-4 text-left">
                            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                <Clock3 size={21} />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    Submitted On
                                </p>

                                <p className="text-sm sm:text-base font-bold text-[#092d52] mt-1">
                                    {formattedDate}, {formattedTime}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 rounded-2xl bg-slate-50/95 border border-slate-200 px-5 py-4">
                        <p className="text-sm text-slate-500">
                            You will receive an email notification at
                        </p>

                        <p className="text-sm font-semibold text-[#092d52] mt-1 break-all">
                            {email}
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            navigate("/login", {
                                state: { role },
                            })
                        }
                        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0b4f8a] text-white text-sm font-semibold hover:bg-[#083d6b] transition shadow-sm"
                    >
                        <ArrowLeft size={18} />
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationSuccess;