import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toast";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "Domestic Travel",
    description: "Your gateway to the most beautiful destinations in India",
};

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Providers>
                    <div className="site-chrome">
                        <Navbar />
                    </div>

                    {children}

                    <Toaster />

                    <div className="site-chrome">
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}