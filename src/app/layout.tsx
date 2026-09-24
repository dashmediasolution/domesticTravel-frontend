import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Domestic Travel",
    description:
        "Your gateway to the most beautiful destinations in India",
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
            <body className="min-h-full">
                {children}
            </body>
        </html>
    );
}