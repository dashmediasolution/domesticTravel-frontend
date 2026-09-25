import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    Mail,
    MapPin,
    Phone,
    Globe,
} from "lucide-react";

const COMPANY_NAME = "WANDER-INDIA";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-[#F7FAF9]">
            {/* HERO */}
           {/* PAGE HEADING */}
<section className="mx-auto w-full max-w-7xl px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14 lg:px-10 lg:pb-12 lg:pt-16">
    <div className="flex flex-col items-center text-center">
        <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#2FC2B0]"
        >
            <ArrowLeft className="size-4" />
            Back to Home
        </Link>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2FC2B0]/20 bg-[#2FC2B0]/10 px-4 py-2 text-xs font-semibold text-[#00383B]">
            <CalendarDays className="size-4 text-[#2FC2B0]" />
            Effective Date: 25 Sep, 2026
        </div>

        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-[#00383B] sm:text-4xl md:text-5xl lg:text-6xl">
            Terms &{" "}
            <span className="text-[#2FC2B0]">
                Conditions
            </span>
        </h1>
    </div>
</section>

            {/* CONTENT */}
            <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:gap-12">
                    {/* DESKTOP TABLE OF CONTENTS */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#2FC2B0]">
                                On this page
                            </p>

                            <nav className="mt-4 space-y-1">
                                {[
                                    "Introduction & Scope",
                                    "User Eligibility",
                                    "Booking Process",
                                    "Agent Role",
                                    "Customer Responsibilities",
                                    "Travel Insurance",
                                    "Intellectual Property",
                                    "Governing Law",
                                    "Contact Us",
                                ].map((item, index) => (
                                    <a
                                        key={item}
                                        href={`#section-${index + 1}`}
                                        className="block rounded-lg px-3 py-2 text-xs leading-5 text-gray-500 transition-colors hover:bg-[#2FC2B0]/10 hover:text-[#00383B]"
                                    >
                                        {index + 1}. {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* TERMS */}
                    <article className="min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-7 shadow-sm sm:rounded-3xl sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                        <div className="max-w-4xl">
                            <div
                                id="section-1"
                                className="scroll-mt-24 border-b border-gray-100 pb-8 sm:pb-10"
                            >
                                <SectionTitle number="1." title="Introduction & Scope of Services" />

                                <p>
                                    {COMPANY_NAME} (“Company,” “we,”
                                    “us,” or “our”), located in New Delhi,
                                    India, operates exclusively as an
                                    intermediary booking agent facilitating
                                    domestic and international travel
                                    packages connected to India.
                                </p>

                                <p>
                                    {COMPANY_NAME} does not own, operate,
                                    manage, supply, or control any airlines,
                                    hotels, transport services, tour
                                    operations, or other third-party service
                                    providers. All travel packages listed or
                                    booked through {COMPANY_NAME} are
                                    independently fulfilled, managed, and
                                    executed by independent third-party
                                    suppliers and tour operators.
                                </p>
                            </div>

                            <div
                                id="section-2"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="2." title="User Eligibility & Information Accuracy" />

                                <Bullet>
                                    <strong>Age Requirement:</strong> You
                                    must be at least 18 years of age and
                                    possess the legal capacity to enter into
                                    binding agreements to make a booking
                                    through {COMPANY_NAME}.
                                </Bullet>

                                <Bullet>
                                    <strong>Accuracy of Information:</strong>{" "}
                                    You are solely responsible for ensuring
                                    that all details provided during the
                                    booking process—including legal names
                                    (matching passport/official
                                    identification), contact details, age,
                                    travel dates, and special requirements—
                                    are accurate and complete.{" "}
                                    {COMPANY_NAME} is not liable for any
                                    financial losses, rebooking fees, or
                                    service denials resulting from incorrect
                                    information supplied by the customer.
                                </Bullet>
                            </div>

                            <div
                                id="section-3"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="3." title="Booking Process & Price Modifications" />

                                <Bullet>
                                    <strong>
                                        Booking Flow & Confirmation:
                                    </strong>{" "}
                                    A booking request is initiated upon
                                    submission of client details and
                                    applicable payment. A booking is
                                    considered binding only after{" "}
                                    {COMPANY_NAME} receives confirmation from
                                    the third-party supplier and issues an
                                    official confirmation voucher or receipt
                                    to the customer.
                                </Bullet>

                                <Bullet>
                                    <strong>Price Adjustments:</strong> All
                                    prices quoted prior to final confirmation
                                    are subject to change without prior
                                    notice due to supplier rate adjustments,
                                    fuel surcharges, tax updates, or currency
                                    fluctuations. {COMPANY_NAME} reserves the
                                    right to adjust advertised prices prior to
                                    issuing a final booking confirmation.
                                </Bullet>
                            </div>

                            <div
                                id="section-4"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="4." title="Agent Role & Limitation of Liability" />

                                <Bullet>
                                    <strong>
                                        Agency & Remuneration Model:
                                    </strong>{" "}
                                    {COMPANY_NAME} functions strictly as a
                                    ticketing and booking facilitator. We
                                    receive compensation, commissions, or
                                    service fees from suppliers or customers
                                    upon the successful completion of a
                                    booking. Once the booking process is
                                    complete, our agency role is fulfilled.
                                </Bullet>

                                <Bullet>
                                    <strong>
                                        Disclaimer of Supplier Acts:
                                    </strong>{" "}
                                    {COMPANY_NAME} is not liable for any acts,
                                    omissions, errors, warranties,
                                    representations, breaches, or negligence
                                    of any third-party supplier, nor for any
                                    personal injury, death, property damage,
                                    delays, cancellations, overbookings,
                                    operational disruptions, quality of
                                    service issues, or force majeure events
                                    occurring during travel.
                                </Bullet>

                                <Bullet>
                                    <strong>Grievances:</strong> Any issues,
                                    service quality disputes, or operational
                                    claims arising during or after the
                                    execution of the travel package must be
                                    directed strictly to the independent
                                    third-party operator managing the tour.
                                </Bullet>
                            </div>

                            <div
                                id="section-5"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="5." title="Customer Responsibilities" />

                                <Bullet>
                                    <strong>
                                        Travel Documentation:
                                    </strong>{" "}
                                    Customers are solely responsible for
                                    obtaining and maintaining all required
                                    travel documents, including valid
                                    passports (valid for at least 6 months
                                    beyond the intended date of return),
                                    entry visas, transit visas, permits,
                                    health certificates, and vaccination
                                    documentation required for domestic and
                                    international travel.
                                </Bullet>

                                <Bullet>
                                    <strong>Compliance:</strong> Customers
                                    must strictly comply with all applicable
                                    local laws, regulations, customs, health
                                    protocols, and rules established by
                                    third-party operators and transport
                                    providers. Failure to comply may result
                                    in cancellation of service without
                                    refund.
                                </Bullet>
                            </div>

                            <div
                                id="section-6"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="6." title="Travel Insurance Recommendation" />

                                <p>
                                    {COMPANY_NAME} strongly advises all
                                    travelers to purchase comprehensive
                                    travel, health, and trip-cancellation
                                    insurance. It is the customer's
                                    responsibility to secure coverage against
                                    unforeseen events, including medical
                                    emergencies, personal accidents, baggage
                                    loss, flight delays, trip interruptions,
                                    and cancellation penalties.{" "}
                                    {COMPANY_NAME} assumes no financial
                                    responsibility for costs incurred due to
                                    lack of adequate insurance.
                                </p>
                            </div>

                            <div
                                id="section-7"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="7." title="Intellectual Property Rights" />

                                <p>
                                    All content, trademarks, logos, brand
                                    names, service marks, text, graphics,
                                    images, software, and layout featured on{" "}
                                    {COMPANY_NAME}’s website and promotional
                                    materials are the exclusive property of{" "}
                                    {COMPANY_NAME} or its content licensors.
                                    Unauthorized copying, reproduction,
                                    redistribution, or modification of any
                                    material is strictly prohibited.
                                </p>
                            </div>

                            <div
                                id="section-8"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle number="8." title="Governing Law & Jurisdiction" />

                                <p>
                                    These Terms & Conditions shall be
                                    governed by, construed, and enforced in
                                    accordance with the laws of the Republic
                                    of India. Any legal dispute, claim, or
                                    proceeding arising out of or relating to
                                    the services provided by {COMPANY_NAME}
                                    shall be subject strictly and exclusively
                                    to the jurisdiction of the competent
                                    courts situated in{" "}
                                    <strong>
                                        New Delhi, India
                                    </strong>
                                    .
                                </p>
                            </div>

                            {/* CONTACT */}
                            <div
                                id="section-9"
                                className="scroll-mt-24 pt-8 sm:pt-10"
                            >
                                <div className="mb-6">
                                    <span className="text-sm font-bold text-[#2FC2B0]">
                                        31.
                                    </span>

                                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#00383B] sm:text-3xl">
                                        Contact Us
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <ContactItem
                                        icon={
                                            <Mail className="size-5" />
                                        }
                                        label="Email"
                                        value="[Email Address]"
                                    />

                                    <ContactItem
                                        icon={
                                            <Phone className="size-5" />
                                        }
                                        label="Phone"
                                        value="[Phone Number]"
                                    />

                                    <ContactItem
                                        icon={
                                            <MapPin className="size-5" />
                                        }
                                        label="Address"
                                        value="[Full Business Address]"
                                    />

                                    <ContactItem
                                        icon={
                                            <Globe className="size-5" />
                                        }
                                        label="Website"
                                        value="[Website URL]"
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}

function SectionTitle({
    number,
    title,
}: {
    number: string;
    title: string;
}) {
    return (
        <div className="mb-5 flex items-start gap-3 sm:gap-4">
            <span className="mt-1 shrink-0 text-sm font-bold text-[#2FC2B0] sm:text-base">
                {number}
            </span>

            <h2 className="text-xl font-bold leading-tight tracking-tight text-[#00383B] sm:text-2xl lg:text-3xl">
                {title}
            </h2>
        </div>
    );
}

function Bullet({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mb-5 flex items-start gap-3 last:mb-0">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#2FC2B0]" />

            <p>{children}</p>
        </div>
    );
}

function ContactItem({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex min-w-0 items-start gap-3 rounded-xl border border-gray-100 bg-[#F7FAF9] p-4 sm:p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#2FC2B0]/10 text-[#2FC2B0]">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-xs font-medium text-gray-400">
                    {label}
                </p>

                <p className="mt-1 break-words text-sm font-semibold leading-6 text-[#00383B]">
                    {value}
                </p>
            </div>
        </div>
    );
}