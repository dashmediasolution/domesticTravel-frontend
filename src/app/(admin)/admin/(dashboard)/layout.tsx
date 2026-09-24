import type { ReactNode } from "react";

import {
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminDashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <SidebarProvider>
            <AdminSidebar />

            <div className="flex min-h-screen w-full flex-col bg-[#F7F9F9]">
                <header className="flex h-16 items-center border-b bg-white px-4">
                    <SidebarTrigger />

                    <h1 className="ml-4 text-lg font-semibold text-[#00383B]">
                        Admin Dashboard
                    </h1>
                </header>

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}