import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QueryFormPopup from "@/components/layout/QueryFormPopup";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toast";
import TravelChatbot from "@/components/TravelChatbot";

// Keep your existing metadata, fonts, providers and layout.
export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <div className="min-h-screen flex flex-col">
                <div className="site-chrome">
                    <Navbar />
                </div>

                <main className="flex-1">
                    {children}
                    <TravelChatbot />
                </main>

                <div className="site-chrome">
                    <Footer />
                </div>

                <QueryFormPopup />
                <Toaster />
            </div>
        </Providers>
    );
}