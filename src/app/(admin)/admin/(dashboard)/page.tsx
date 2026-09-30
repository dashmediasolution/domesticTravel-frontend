"use client";

import Link from "next/link";

import {
    ArrowRight,
    BookOpen,
    ImageIcon,
    MapPin,
    Package,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const stats = [
    {
        title: "Destinations",
        value: "—",
        description: "Total destinations",
        icon: MapPin,
        href: "/admin/destinations",
    },
    {
        title: "Packages",
        value: "—",
        description: "Total packages",
        icon: Package,
        href: "/admin/packages",
    },
    {
        title: "Banners",
        value: "—",
        description: "Total banners",
        icon: ImageIcon,
        href: "/admin/banners",
    },
    {
        title: "Blogs",
        value: "—",
        description: "Total blog posts",
        icon: BookOpen,
        href: "/admin/blogs",
    },
];

const quickActions = [
    {
        title: "Create Destination",
        href: "/admin/destinations/create",
        icon: MapPin,
    },
    {
        title: "Create Package",
        href: "/admin/packages/create",
        icon: Package,
    },
    {
        title: "Create Banner",
        href: "/admin/banners/create",
        icon: ImageIcon,
    },
    {
        title: "Create Blog",
        href: "/admin/blogs/create",
        icon: BookOpen,
    },
];

export default function AdminPage() {
    return (
        <div className="mx-auto max-w-7xl space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your WANDER-INDIA website.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                        >
                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-5">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                {item.title}
                                            </p>

                                            <p className="mt-2 text-3xl font-semibold">
                                                {item.value}
                                            </p>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {quickActions.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-4 w-4" />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-sm font-medium">
                                            {item.title}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            Create new
                                        </p>
                                    </div>

                                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                </Link>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed">
                        <div className="text-center">
                            <p className="text-sm font-medium">
                                No recent activity
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Your latest admin activity will appear here.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}