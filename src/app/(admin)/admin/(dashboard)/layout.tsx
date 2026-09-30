import type { ReactNode } from "react";

import StoreProvider from "@/store/provider";

import {
    SidebarInset,
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
        <StoreProvider>
            <SidebarProvider>
                <AdminSidebar />

                <SidebarInset className="bg-[#F7F9F9]">
                    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center border-b bg-white px-4 sm:px-6">
                        <SidebarTrigger className="-ml-1" />

                        <div className="ml-3 h-5 w-px bg-border" />

                        <div className="ml-3">
                            <h1 className="text-sm font-semibold text-[#00383B] sm:text-base">
                                Admin Dashboard
                            </h1>

                            <p className="hidden text-xs text-muted-foreground sm:block">
                                Manage your travel website
                            </p>
                        </div>
                    </header>

                    <main className="flex-1 p-4 sm:p-6 lg:p-8">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </StoreProvider>
    );
}