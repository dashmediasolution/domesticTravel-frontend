import {
    Check,
    LoaderCircle,
    MapPin,
    Search,
    ShieldCheck,
} from "lucide-react";

const searchSteps = [
    "Checking availability",
    "Comparing prices",
    "Preparing your options",
];

export default function SearchPage() {
    return (
        <main data-standalone-page className="min-h-[calc(100vh-140px)] bg-[#f4f8f6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <section className="relative overflow-hidden rounded-[28px] bg-[#123d42] px-6 py-10 text-white shadow-[0_20px_60px_rgba(18,61,66,0.18)] sm:px-10 sm:py-14 lg:min-h-[500px] lg:px-14 lg:py-16">
                    <div className="absolute -right-20 -top-20 size-64 rounded-full border border-white/10" />
                    <div className="absolute -bottom-28 -left-16 size-72 rounded-full border border-[#55c7b4]/20" />

                    <div className="relative flex h-full flex-col justify-between gap-16">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a8e5d8]">
                                <Search className="size-3.5" />
                                Search in progress
                            </div>
                            <h1 className="mt-6 max-w-lg text-4xl font-bold tracking-tight sm:text-5xl">
                                Finding a better way to get there.
                            </h1>
                            <p className="mt-4 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                                We are checking the latest travel options and lining up the best matches for your journey.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-white/75">
                            <span className="flex size-10 items-center justify-center rounded-full bg-[#55c7b4]/15 text-[#8ce3d3]">
                                <MapPin className="size-5" />
                            </span>
                            Searching across trusted travel partners
                        </div>
                    </div>
                </section>

                <section className="rounded-[28px] border border-[#d9e9e3] bg-white p-6 shadow-[0_14px_40px_rgba(18,61,66,0.08)] sm:p-9">
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e3f4ef] text-[#19796f]">
                            <LoaderCircle className="size-6 animate-spin" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-[#123d42]">Working on it</p>
                            <p className="mt-1 text-sm text-slate-500">This should only take a moment.</p>
                        </div>
                    </div>

                    <div className="mt-8 space-y-3">
                        {searchSteps.map((step, index) => (
                            <div key={step} className="flex items-center gap-3 rounded-xl bg-[#f7faf8] px-4 py-3.5 text-sm text-slate-600">
                                <span className={`flex size-6 items-center justify-center rounded-full ${index === 0 ? "bg-[#2f9b8d] text-white" : "bg-[#e3f4ef] text-[#19796f]"}`}>
                                    {index === 0 ? <LoaderCircle className="size-3.5 animate-spin" /> : <Check className="size-3.5" />}
                                </span>
                                {step}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">
                        <div className="rounded-xl bg-[#f7faf8] p-3 text-center">
                            <ShieldCheck className="mx-auto size-5 text-[#2f9b8d]" />
                            <p className="mt-2 text-xs font-semibold text-slate-600">Secure search</p>
                        </div>
                        <div className="rounded-xl bg-[#f7faf8] p-3 text-center">
                            <Search className="mx-auto size-5 text-[#2f9b8d]" />
                            <p className="mt-2 text-xs font-semibold text-slate-600">Live availability</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}