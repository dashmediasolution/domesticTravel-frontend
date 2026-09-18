import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Construction, MapPin } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#f5faf8] px-4 py-16 sm:px-6 lg:px-8">
            <div className="absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#c8f1e8] blur-3xl" />
            <div className="absolute -bottom-36 -left-24 -z-10 h-80 w-80 rounded-full bg-[#dcefeb] blur-3xl" />

            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <section className="max-w-xl">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b7e6dc] bg-white/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#168f80] shadow-sm">
                        <Construction className="size-4" aria-hidden="true" />
                        <span>Page under construction</span>
                    </div>

                    <p className="font-bebas text-8xl leading-none text-[#31c4af] sm:text-[10rem]">
                        404
                    </p>
                    <h1 className="mt-2 max-w-lg text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        This trail hasn&apos;t been mapped yet.
                    </h1>
                    <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
                        We&apos;re still building this page, or the link may no longer exist. Let&apos;s get you back to somewhere worth exploring.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#31c4af] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(49,196,175,0.25)] transition-transform hover:-translate-y-0.5 hover:bg-[#25ad9d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168f80]"
                        >
                            Back to home
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                     
                    </div>
                </section>

                <section className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-label="Travel preview">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200 shadow-[0_24px_70px_rgba(20,73,67,0.16)] sm:aspect-[5/4]">
                        <Image
                            src="https://images.unsplash.com/photo-1553697388-94e804e2f0f6?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="A scenic travel destination"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                                    Keep wandering
                                </p>
                                <p className="mt-1 text-xl font-semibold sm:text-2xl">
                                    Your next story starts here.
                                </p>
                            </div>
                            <MapPin className="mb-1 size-7 shrink-0 text-[#79ead8]" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="absolute -bottom-4 left-6 h-2 w-24 rounded-full bg-[#31c4af] sm:left-10" />
                </section>
            </div>
        </main>
    );
}
