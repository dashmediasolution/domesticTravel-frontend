"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChartNoAxesCombined,
    CircleDollarSign,
    FileText,
    FolderOpen,
    Image,
    LogOut,
    MapPinned,
    Package,
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
        icon: ChartNoAxesCombined,
    },
    {
        title: "Destinations",
        href: "/admin/destinations",
        icon: MapPinned,
    },
    {
        title: "Packages",
        href: "/admin/packages",
        icon: Package,
    },
    {
        title: "Banners",
        href: "/admin/banners",
        icon: Image,
    },
    {
        title: "Offers",
        href: "/admin/offers",
        icon: CircleDollarSign,
    },
    {
        title: "Blogs",
        href: "/admin/blogs",
        icon: FileText,
    },
  
];
 

export default function AdminSidebar() {
    const pathname = usePathname();

    const isMenuItemActive = (href: string) => {
        if (href === "/admin") {
            return pathname === "/admin";
        }

        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    };

    return (
        <Sidebar>
            <SidebarHeader className="border-b">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-fit m-0 p-1">
                            <Link href="/admin" className="flex gap-3 ">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#2FC2B0]">
                                    <Plane className="size-5 text-white" />
                                </div>

                                <div className="flex min-w-0 flex-col">
                                    <span className="truncate text-base font-bold tracking-tight text-[#00383B]">
                                        WANDER-INDIA
                                    </span>

                                    <span className="truncate text-[11px] text-muted-foreground">
                                        Admin Panel
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
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
                                    isMenuItemActive(
                                        item.href
                                    );

                                return (
                                    <SidebarMenuItem
                                        key={item.href}
                                    >
                                        <SidebarMenuButton
                                             
                                            isActive={isActive}
                                            tooltip={item.title}
                                        >
                                            <Link
                                                href={item.href}
                                            className="flex gap-2">
                                                <Icon />
                                                <span>
                                                    {item.title}
                                                </span>
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
                            className="cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-600"
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