"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    FolderOpen,
    Image,
    Settings,
    LogOut,
    Plane,
} from "lucide-react";
import { signOut } from "next-auth/react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Blogs",
        href: "/admin/blogs",
        icon: FileText,
    },
    {
        title: "Categories",
        href: "/admin/categories",
        icon: FolderOpen,
    },
    {
        title: "Media",
        href: "/admin/media",
        icon: Image,
    },
];

const settingsItems = [
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="border-b">
                <Link
                    href="/admin"
                    className="flex items-center gap-3 px-2 py-3"
                >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2FC2B0]">
                        <Plane className="size-5 text-white" />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-[#00383B]">
                            WANDER-INDIA
                        </span>

                        <span className="text-xs text-muted-foreground">
                            Admin Panel
                        </span>
                    </div>
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Management
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => {
                                const Icon = item.icon;

                                const isActive =
                                    item.href === "/admin"
                                        ? pathname === "/admin"
                                        : pathname.startsWith(item.href);

                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton

                                            isActive={isActive}
                                            tooltip={item.title}
                                        >
                                            <Link href={item.href} className="flex gap-3 justify-center ">
                                                <Icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        System
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {settingsItems.map((item) => {
                                const Icon = item.icon;

                                const isActive =
                                    pathname.startsWith(item.href);

                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton

                                            isActive={isActive}
                                            tooltip={item.title}
                                        >
                                            <Link href={item.href}>
                                                <Icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            tooltip="Logout"
                            onClick={() =>
                                signOut({
                                    callbackUrl: "/",
                                })
                            }
                            className="text-red-500 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                        >
                            <LogOut />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}