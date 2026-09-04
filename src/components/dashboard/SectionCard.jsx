function SectionCard({ title, subtitle, children, className = "" }) {
    return (
        <section className={`bg-white border border-slate-200 rounded-2xl shadow-sm ${className}`}>
            <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-bold text-[#092d52]">
                    {title}
                </h3>

                {subtitle && (
                    <p className="text-xs text-slate-400 mt-1">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="p-6">
                {children}
            </div>
        </section>
    );
}

export default SectionCard;