import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    Mail,
    Phone,
    ShieldCheck,
    LockKeyhole,
} from "lucide-react";

const COMPANY_NAME = "WANDER-INDIA";

export default function PrivacyPolicyPage() {
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
            Privacy{" "}
            <span className="text-[#2FC2B0]">
                Policy
            </span>
        </h1>
    </div>
</section>

            {/* CONTENT */}
            <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:gap-12">

                    {/* TABLE OF CONTENTS */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="size-4 text-[#2FC2B0]" />

                                <p className="text-xs font-bold uppercase tracking-wider text-[#2FC2B0]">
                                    On this page
                                </p>
                            </div>

                            <nav className="mt-4 space-y-1">
                                {[
                                    "Information We Collect",
                                    "How We Use Your Information",
                                    "Sharing Data with Third Parties",
                                    "Data Protection & Storage",
                                    "Cookies & Tracking Technologies",
                                    "User Rights & Contact Information",
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

                    {/* POLICY CONTENT */}
                    <article className="min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-7 shadow-sm sm:rounded-3xl sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                        <div className="max-w-4xl">

                            {/* SECTION 1 */}
                            <section
                                id="section-1"
                                className="scroll-mt-24 border-b border-gray-100 pb-8 sm:pb-10"
                            >
                                <SectionTitle
                                    number="1."
                                    title="Information We Collect"
                                />

                                <p>
                                    {COMPANY_NAME} collects personal
                                    information to deliver booking services,
                                    process transactions, and improve user
                                    experience. We gather the following
                                    categories of data:
                                </p>

                                <Bullet>
                                    <strong>
                                        Personal Identification Data:
                                    </strong>{" "}
                                    Full name, email address, telephone
                                    number, mailing address, date of birth,
                                    passport/government ID numbers (where
                                    required for travel verification), and
                                    travel preferences or special requests.
                                </Bullet>

                                <Bullet>
                                    <strong>Financial Data:</strong>{" "}
                                    Payment information, billing address, and
                                    transaction history. All payment
                                    transactions are processed securely
                                    through accredited third-party payment
                                    gateways; {COMPANY_NAME} does not directly
                                    store sensitive full credit card numbers
                                    or banking credentials.
                                </Bullet>

                                <Bullet>
                                    <strong>
                                        Technical & Usage Data:
                                    </strong>{" "}
                                    IP address, device type, operating system,
                                    browser type, geographical location,
                                    access logs, and browsing behavior on our
                                    platform collected via standard automated
                                    technologies.
                                </Bullet>
                            </section>

                            {/* SECTION 2 */}
                            <section
                                id="section-2"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="2."
                                    title="How We Use Your Information"
                                />

                                <p>
                                    We process personal data strictly in
                                    connection with our travel facilitation
                                    services and in compliance with applicable
                                    Indian laws, including the Information
                                    Technology Act, 2000, and related rules.
                                    Uses include:
                                </p>

                                <Bullet>
                                    <strong>
                                        Fulfilling Travel Bookings:
                                    </strong>{" "}
                                    Processing reservation requests, securing
                                    tickets, and sharing essential travel
                                    details with third-party fulfillment
                                    partners.
                                </Bullet>

                                <Bullet>
                                    <strong>
                                        Communication & Support:
                                    </strong>{" "}
                                    Sending booking confirmations, travel
                                    vouchers, itinerary updates,
                                    administrative notices, and responding to
                                    customer service inquiries.
                                </Bullet>

                                <Bullet>
                                    <strong>
                                        Regulatory & Legal Compliance:
                                    </strong>{" "}
                                    Fulfilling record-keeping obligations,
                                    accounting and tax auditing requirements,
                                    and responding to lawful requests from
                                    government or law enforcement agencies
                                    under Indian jurisdiction.
                                </Bullet>
                            </section>

                            {/* SECTION 3 */}
                            <section
                                id="section-3"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="3."
                                    title="Sharing Data with Third Parties"
                                />

                                <p>
                                    {COMPANY_NAME} operates as an intermediary
                                    booking agent and must share certain
                                    information with external service
                                    providers to complete your travel
                                    arrangements:
                                </p>

                                <Bullet>
                                    <strong>
                                        Travel Fulfillment Partners:
                                    </strong>{" "}
                                    Essential personal details (such as names,
                                    contact info, ID numbers, and special
                                    requests) are shared with independent
                                    third-party operators, including airlines,
                                    hotels, transport providers, local tour
                                    guides, and activity providers.
                                </Bullet>

                                <Bullet>
                                    <strong>Payment Processors:</strong>{" "}
                                    Financial information is transmitted
                                    directly to trusted third-party payment
                                    gateway providers operating under
                                    industry-standard security protocols.
                                </Bullet>

                                <Bullet>
                                    <strong>No Sale Policy:</strong>{" "}
                                    {COMPANY_NAME} strictly maintains a policy
                                    against selling, renting, trading, or
                                    leasing your personal information to
                                    unauthorized third parties for marketing
                                    purposes.
                                </Bullet>
                            </section>

                            {/* SECTION 4 */}
                            <section
                                id="section-4"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="4."
                                    title="Data Protection & Storage"
                                />

                                <Bullet>
                                    <strong>Security Standards:</strong>{" "}
                                    We implement administrative, technical, and
                                    physical security measures—including SSL
                                    encryption, firewall protection, and
                                    restricted internal access controls—to
                                    protect personal data against unauthorized
                                    access, loss, misuse, or alteration.
                                </Bullet>

                                <Bullet>
                                    <strong>Data Retention:</strong>{" "}
                                    Personal information is retained only as
                                    long as necessary to fulfill the purposes
                                    for which it was collected or to comply
                                    with statutory retention requirements under
                                    Indian tax, accounting, and financial laws.
                                </Bullet>
                            </section>

                            {/* SECTION 5 */}
                            <section
                                id="section-5"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="5."
                                    title="Cookies & Tracking Technologies"
                                />

                                <p>
                                    {COMPANY_NAME} uses cookies, web beacons,
                                    and similar tracking technologies to enhance
                                    user navigation and analyze traffic
                                    patterns:
                                </p>

                                <Bullet>
                                    <strong>Functional Cookies:</strong>{" "}
                                    Essential for website navigation, user
                                    authentication, and maintaining session
                                    data during the booking flow.
                                </Bullet>

                                <Bullet>
                                    <strong>Analytical Cookies:</strong>{" "}
                                    Help us understand user interactions,
                                    traffic sources, and site performance to
                                    optimize user experience.
                                </Bullet>

                                <Bullet>
                                    <strong>Marketing Cookies:</strong>{" "}
                                    Used to serve relevant offers or
                                    advertisements tailored to user interests
                                    across digital channels.
                                </Bullet>

                                <Bullet>
                                    <strong>Managing Cookies:</strong>{" "}
                                    Users may adjust their web browser settings
                                    to reject cookies or prompt before accepting
                                    cookies. Disabling functional cookies may
                                    affect the operational capability of the
                                    booking portal.
                                </Bullet>
                            </section>

                            {/* SECTION 6 */}
                            <section
                                id="section-6"
                                className="scroll-mt-24 border-b border-gray-100 py-8 sm:py-10"
                            >
                                <SectionTitle
                                    number="6."
                                    title="User Rights & Contact Information"
                                />

                                <p>
                                    Subject to applicable local laws,
                                    customers possess the following rights
                                    regarding their personal data:
                                </p>

                                <Bullet>
                                    <strong>
                                        Access & Rectification:
                                    </strong>{" "}
                                    The right to request access to personal
                                    data held by {COMPANY_NAME} and request
                                    corrections to inaccurate or incomplete
                                    information.
                                </Bullet>

                                <Bullet>
                                    <strong>Deletion:</strong>{" "}
                                    The right to request the erasure of
                                    personal information, provided retention is
                                    no longer mandated by applicable legal or
                                    tax regulations.
                                </Bullet>

                                <Bullet>
                                    <strong>Privacy Enquiries:</strong>{" "}
                                    For queries regarding this Privacy Policy,
                                    updating details, or exercising data
                                    rights, please contact our designated
                                    Grievance/Privacy Officer at:
                                </Bullet>

                                <div className="mt-5 rounded-2xl border border-[#2FC2B0]/20 bg-[#F7FAF9] p-5">
                                    <div className="space-y-3 text-sm leading-6 text-gray-600">
                                        <p>
                                            <strong className="text-[#00383B]">
                                                Email:
                                            </strong>{" "}
                                            [Insert Privacy Email Address]
                                        </p>

                                        <p>
                                            <strong className="text-[#00383B]">
                                                Contact:
                                            </strong>{" "}
                                            [Insert Contact Number]
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 31 */}
                            <section
                                id="section-7"
                                className="scroll-mt-24 pt-8 sm:pt-10"
                            >
                                <div className="mb-6 flex items-start gap-3 sm:gap-4">
                                    <span className="mt-1 shrink-0 text-sm font-bold text-[#2FC2B0] sm:text-base">
                                        31.
                                    </span>

                                    <h2 className="text-xl font-bold leading-tight tracking-tight text-[#00383B] sm:text-2xl lg:text-3xl">
                                        Contact Us
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                                </div>
                            </section>

                            {/* SECURITY NOTE */}
                            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-[#2FC2B0]/20 bg-[#2FC2B0]/5 p-5 sm:p-6">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2FC2B0]/10">
                                    <LockKeyhole className="size-5 text-[#2FC2B0]" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#00383B] sm:text-base">
                                        Your Privacy Matters
                                    </h3>

                                    <p className="mt-1 text-xs leading-6 text-gray-500 sm:text-sm">
                                        We are committed to handling your
                                        personal information responsibly and
                                        using it only for the purposes described
                                        in this Privacy Policy.
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