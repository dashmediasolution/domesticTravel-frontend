export default function HeroSectionSkeleton() {
    return (
        <section className="relative flex min-h-[40vh] w-full items-center overflow-hidden bg-gray-900 lg:min-h-[650px] animate-pulse">
            {/* Background skeleton */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />

            {/* Navbar skeleton */}
            <div className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-5 lg:px-28">
                <div className="h-5 w-32 rounded bg-white/20" />

                <div className="hidden items-center gap-8 lg:flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-4 w-16 rounded bg-white/20"
                        />
                    ))}
                </div>

                <div className="flex gap-3">
                    <div className="h-9 w-20 rounded-full bg-white/20" />
                    <div className="h-9 w-36 rounded-full bg-white/20" />
                </div>
            </div>

            {/* Hero content */}
            <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:px-28">

                {/* Left content */}
                <div className="max-w-[480px] space-y-5">
                    <div className="h-4 w-32 rounded bg-white/20" />

                    <div className="space-y-3">
                        <div className="h-12 w-full rounded bg-white/25" />
                        <div className="h-12 w-4/5 rounded bg-white/25" />
                    </div>

                    <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-white/15" />
                        <div className="h-4 w-[90%] rounded bg-white/15" />
                        <div className="h-4 w-[75%] rounded bg-white/15" />
                    </div>

                    <div className="h-10 w-36 rounded-full bg-white/25" />
                </div>

                {/* Right destination cards */}
                <div className="hidden items-center justify-end gap-4 lg:flex">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className={`relative w-[190px] rounded-[22px] bg-white/20 ${i === 0
                                    ? "h-[285px]"
                                    : "h-[250px]"
                                }`}
                        >
                            <div className="absolute bottom-6 left-4 h-6 w-3/4 rounded bg-white/20" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel controls */}
            <div className="absolute bottom-8 right-10 z-10 hidden items-center gap-4 lg:flex">
                <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10" />
                <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10" />
                <div className="h-1 w-48 rounded bg-white/20" />
                <div className="h-8 w-10 rounded bg-white/20" />
            </div>
        </section>
    )
}
