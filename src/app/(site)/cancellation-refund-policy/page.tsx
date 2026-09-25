import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    CircleDollarSign,
    FileText,
} from "lucide-react";

const COMPANY_NAME = "WANDER-INDIA";

export default function CancellationRefundPolicyPage() {
    return (
        <main className="min-h-screen bg-[#F7FAF9]">
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
                        Cancellation &{" "}
                        <span className="text-[#2FC2B0]">
                            Refund Policy
                        </span>
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:gap-12">

                    {/* TABLE OF CONTENTS */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2">
                                <FileText className="size-4 text-[#2FC2B0]" />

                                <p className="text-xs font-bold uppercase tracking-wider text-[#2FC2B0]">
                                    On this page
                                </p>
                            </div>

                            <nav className="mt-4 space-y-1">
                                {[
                                    "Third-Party Supplier Primacy",
                                    "Customer-Initiated Cancellations",
                                    "Convenience & Service Fees",
                                    "Supplier-Initiated Cancellations",
                                    "Refund Processing Procedure",
                                    "Force Majeure",
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

                    {/* POLICY */}
                    <article className="min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-7 shadow-sm sm:rounded-3xl sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                        <div className="max-w-4xl">

                            {/* SECTION 1 */}
                            <section
                                id="section-1"
                                className="scroll-mt-24 border-b border-gray-100 pb-8 sm:pb-10"
                            >
                                <SectionTitle
                                    number="1."
                                    title="Third-Party Supplier Primacy"
                                />

                                <p>
                                    All bookings made through{" "}
                                    {COMPANY_NAME} are subject to the specific
                                    cancellation, change, and refund policies
                                    set by the independent third-party
                                    operators (airlines, hotels, transport
                                    providers, and tour suppliers) fulfilling
                                    the travel package.
                                </p>

                                <p>
                                    {COMPANY_NAME} operates strictly as an
                                    intermediary booking platform and does not
                                    control supplier rules. Consequently, the
                                    third-party supplier&apos;s terms govern
                                    the eligibility, timeline, and amount of
                                    any potential refund or modification
                                    credit.
                                </p>
                            </section>

                            {/* SECTION 2 */}
                            <section
                                id="section-2"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="2."
                                    title="Customer-Initiated Cancellations"
                                />

                                <Bullet>
                                    <strong>Submission Process:</strong>{" "}
                                    All cancellation or booking modification
                                    requests must be submitted in writing
                                    directly to {COMPANY_NAME} via our
                                    official support channels (
                                    [Insert Email/Portal Link]) along with your
                                    booking reference number. Verbal
                                    cancellation requests are not recognized.
                                </Bullet>

                                <Bullet>
                                    <strong>Timelines & Fees:</strong>{" "}
                                    Cancellation fees, cut-off dates, and
                                    non-refundable deposit terms are established
                                    directly by the supplier. Depending on the
                                    supplier&apos;s policy and how close to the
                                    travel date the request is received,
                                    cancellations may incur partial or full
                                    financial penalties up to 100% of the total
                                    package price.
                                </Bullet>
                            </section>

                            {/* SECTION 3 */}
                            <section
                                id="section-3"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="3."
                                    title={`${COMPANY_NAME} Convenience & Service Fees`}
                                />

                                <Bullet>
                                    <strong>Non-Refundability:</strong>{" "}
                                    Any agency fees, administrative charges,
                                    platform convenience fees, or service
                                    surcharges collected by {COMPANY_NAME} at
                                    the time of booking are{" "}
                                    <strong>
                                        strictly non-refundable
                                    </strong>
                                    .
                                </Bullet>

                                <Bullet>
                                    <strong>Agent Role:</strong>{" "}
                                    Because {COMPANY_NAME}&apos;s agency service
                                    is completed once the booking voucher is
                                    successfully issued, our service fee
                                    remains non-refundable even if the
                                    third-party supplier grants a full or
                                    partial refund for the tour package.
                                </Bullet>
                            </section>

                            {/* SECTION 4 */}
                            <section
                                id="section-4"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="4."
                                    title="Supplier-Initiated Cancellations & Modifications"
                                />

                                <Bullet>
                                    <strong>Supplier Adjustments:</strong>{" "}
                                    Third-party tour operators reserve the
                                    right to modify itineraries, reschedule
                                    dates, or cancel tours due to severe
                                    weather, operational constraints, low group
                                    occupancy, safety concerns, or local
                                    disruptions.
                                </Bullet>

                                <Bullet>
                                    <strong>Pass-Through Remedies:</strong>{" "}
                                    In such events, {COMPANY_NAME} will relay
                                    any alternative travel arrangements,
                                    rebooking credits, or monetary refunds
                                    offered directly by the supplier.{" "}
                                    {COMPANY_NAME} is not liable for
                                    complementary compensation, secondary
                                    expenses, or damages resulting from
                                    supplier-side cancellations or route
                                    changes.
                                </Bullet>
                            </section>

                            {/* SECTION 5 */}
                            <section
                                id="section-5"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="5."
                                    title="Refund Processing Procedure"
                                />

                                <div className="space-y-4">
                                    <NumberedStep
                                        number="1"
                                        title="Submission & Verification"
                                    >
                                        Upon receiving your written
                                        cancellation request,{" "}
                                        {COMPANY_NAME} verifies the request
                                        details and submits the claim to the
                                        relevant third-party supplier on your
                                        behalf.
                                    </NumberedStep>

                                    <NumberedStep
                                        number="2"
                                        title="Supplier Approval"
                                    >
                                        The third-party supplier reviews the
                                        claim under their official terms to
                                        determine the applicable refund amount.
                                    </NumberedStep>

                                    <NumberedStep
                                        number="3"
                                        title="Disbursement"
                                    >
                                        Once the supplier approves and remits
                                        the refund to {COMPANY_NAME}, we
                                        process the net amount back to your
                                        original payment method.
                                    </NumberedStep>

                                    <NumberedStep
                                        number="4"
                                        title="Turnaround Time"
                                    >
                                        Approved refunds typically require{" "}
                                        <strong>
                                            14 to 30 business days
                                        </strong>{" "}
                                        to reflect in your account, depending
                                        on supplier remittance timelines and
                                        payment gateway processing schedules.
                                    </NumberedStep>
                                </div>
                            </section>

                            {/* SECTION 6 */}
                            <section
                                id="section-6"
                                className="scroll-mt-24 pt-8 sm:pt-10"
                            >
                                <SectionTitle
                                    number="6."
                                    title="Force Majeure"
                                />

                                <p>
                                    {COMPANY_NAME} shall not be held liable,
                                    financially responsible, or in breach of
                                    contract for any failure, delay,
                                    cancellation, or modification of travel
                                    services caused by events beyond reasonable
                                    control (&quot;Force Majeure
                                    Events&quot;).
                                </p>

                                <p>
                                    Force Majeure Events include, but are not
                                    limited to, natural disasters (earthquakes,
                                    floods, severe weather), fires, epidemics,
                                    pandemics, government restrictions, border
                                    closures, travel advisories, civil unrest,
                                    acts of terrorism, war, strikes, or major
                                    infrastructure failures. Refunds or
                                    rebooking options during Force Majeure
                                    Events remain entirely at the discretion
                                    of the fulfilling third-party suppliers.
                                </p>
                            </section>

                            {/* REFUND HIGHLIGHT */}
                            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-[#2FC2B0]/20 bg-[#2FC2B0]/5 p-5 sm:p-6">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2FC2B0]/10">
                                    <CircleDollarSign className="size-5 text-[#2FC2B0]" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                                        Refund Processing
                                    </h3>

                                    <p className="mt-1 text-xs leading-6 text-gray-500 sm:text-sm">
                                        Approved refunds typically require
                                        14 to 30 business days to reflect in
                                        the customer&apos;s account, subject to
                                        supplier remittance and payment
                                        gateway processing.
                                    </p>
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

            <p className="min-w-0 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                {children}
            </p>
        </div>
    );
}

function NumberedStep({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F7FAF9] p-4 sm:p-5">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2FC2B0] text-sm font-bold text-white">
                {number}
            </div>

            <div className="min-w-0">
                <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {children}
                </p>
            </div>
        </div>
    );
}