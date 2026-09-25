
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
                 with no hidden
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
                partners to
                ensure safety.


            </>
        ),
        icon: Handshake,
    },
    {
        title: "Easy Booking",
        description: (
            <>
                Simple, fast and
                 secure booking
                 experience.
            </>
        ),
        icon: Workflow,
    },
    {
        title: "Tailored Support",
        description: (
            <>
                Our travel experts
are always here
for you.

            </>
        ),
        icon: PhoneCall,
    },
];

export default function WhyTravelWithUs() {
    return (
        <section className="w-full px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
            <div className="mx-auto w-full max-w-[1400px]">
                {/* Heading */}
                <h2
                    className="
                        mb-4
                        text-[19px]
                        font-semibold
                        tracking-tight
                        text-black
                        sm:mb-5
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
                        rounded-[18px]
                        bg-white
                        px-4
                        py-2
                        shadow-[0_2px_12px_rgba(0,0,0,0.10)]
                        sm:rounded-[22px]
                        sm:px-6
                        sm:py-4
                        lg:flex-row
                        lg:items-center
                        lg:rounded-[24px]
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
                                    gap-3
                                    py-3
                                    sm:gap-4
                                    sm:py-4
                                    lg:py-0
                                    ${index !== reasons.length - 1
                                        ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                                        : ""
                                    }
                                    ${index !== 0
                                        ? "lg:pl-6"
                                        : "lg:pl-0"
                                    }
                                    ${index !== reasons.length - 1
                                        ? "lg:pr-6"
                                        : "lg:pr-0"
                                    }
                                `}
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        sm:h-10
                                        sm:w-10
                                    "
                                >
                                    <Icon
                                        strokeWidth={2}
                                        className="
                                            h-7
                                            w-7
                                            text-primary
                                            sm:h-8
                                            sm:w-8
                                            lg:h-10
                                            lg:w-10
                                        "
                                    />
                                </div>

                                {/* Text */}
                                <div className="min-w-0">
                                    <h3
                                        className="
                                            whitespace-nowrap
                                            text-[13px]
                                            font-semibold
                                            leading-4
                                            text-black
                                            sm:text-base
                                            sm:leading-5
                                        "
                                    >
                                        {reason.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-0.5
                                            text-[11px]
                                            font-normal
                                            leading-[14px]
                                            text-[#A7ADB8]
                                            sm:mt-1
                                            sm:text-[14px]
                                            sm:leading-[17px]
                                            lg:text-[16px]
                                            lg:leading-[18px]
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

