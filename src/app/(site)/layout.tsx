import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toast";

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
                </main>

                <div className="site-chrome">
                    <Footer />
                </div>

                <Toaster />
            </div>
        </Providers>
    );
}