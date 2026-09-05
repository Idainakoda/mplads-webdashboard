import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition() {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#f4f8fc] flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`flex flex-col items-center transition-all duration-300 ${
                    visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                }`}
            >
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 border-t-[#0b4f8a] animate-spin" />

                <p className="mt-4 text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                    MPLADS Monitor
                </p>
            </div>
        </div>
    );
}

export default PageTransition;