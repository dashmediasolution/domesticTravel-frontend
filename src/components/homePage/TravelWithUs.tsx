"use client";

import {
    Map,
    CircleDollarSign,
    Handshake,
    Workflow,
    PhoneCall,
} from "lucide-react";

const reasons = [
    {
        title: "Curated Destinations",
        description: (
            <>
                Handpicked pieces
                <br />
                for unforgettable
                <br />
                experiences.
            </>
        ),
        icon: Map,
    },
    {
        title: "Best Price Guarantee",
        description: (
            <>
                Get the best prices
                <br />
                with no hidden
                <br />
                charges.
            </>
        ),
        icon: CircleDollarSign,
    },
    {
        title: "Trusted Partners",
        description: (
            <>
                We work with verified
                <br />
                partners for a safe
                <br />
                journey.
            </>
        ),
        icon: Handshake,
    },
    {
        title: "Easy Booking",
        description: (
            <>
                Simple, fast and
                <br />
                secure booking
                <br />
                experience.
            </>
        ),
        icon: Workflow,
    },
    {
        title: "24/7 Support",
        description: (
            <>
                Our travel experts
                <br />
                are always here
                <br />
                for you.
            </>
        ),
        icon: PhoneCall,
    },
];

export default function WhyTravelWithUs() {
    return (
        <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1344px]">
                
                {/* Heading */}
                <h2
                    className="
                        mb-5
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-black
                        sm:text-[25px]
                    "
                >
                    Why travel with us?
                </h2>

                {/* Main Container */}
                <div
                    className="
                        flex
                        w-full
                        flex-col
                        overflow-hidden
                        rounded-[24px]
                        bg-white
                        px-6
                        py-7
                        shadow-[0_2px_12px_rgba(0,0,0,0.10)]
                        sm:px-8
                        lg:flex-row
                        lg:items-center
                        lg:px-6
                        lg:py-7
                    "
                >
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={reason.title}
                                className={`
                                    flex
                                    min-w-0
                                    flex-1
                                    items-center
                                    font-semibold
                                    gap-4
                                    py-4
                                    lg:py-0
                                    ${
                                        index !== reasons.length - 1
                                            ? "border-b border-gray-300 lg:border-b-0 lg:border-r"
                                            : ""
                                    }
                                    ${
                                        index !== 0
                                            ? "lg:pl-7"
                                            : "lg:pl-0"
                                    }
                                    ${
                                        index !== reasons.length - 1
                                            ? "lg:pr-7"
                                            : "lg:pr-0"
                                    }
                                `}
                            >
                                {/* Icon */}
                                <div className="flex shrink-0 items-center justify-center">
                                    <Icon
                                        strokeWidth={2}
                                        className="
                                            h-10
                                            w-10
                                            text-primary
                                        "
                                    />
                                </div>

                                {/* Text */}
                                <div className="min-w-0">
                                    <h3
                                        className="
                                            whitespace-nowrap
                                            text-base
                                            font-semibold
                                            leading-5
                                            text-black
                                        "
                                    >
                                        {reason.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[16px]
                                            font-normal
                                            leading-[18px]
                                            text-[#A7ADB8]
                                        "
                                    >
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}