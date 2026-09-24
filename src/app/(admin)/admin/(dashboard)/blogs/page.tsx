import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BlogsPage() {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[#00383B] sm:text-3xl">
                        Blogs
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                        Manage your travel blogs and articles.
                    </p>
                </div>

                <Button
                     
                    className="w-full bg-[#2FC2B0] text-white hover:bg-[#24ad9e] sm:w-auto"
                >
                    <Link href="/admin/blogs/create-blog" className="flex cursor-pointer">
                        <Plus className="mr-2 size-4" />
                        Create Blog
                    </Link>
                </Button>
            </div>

            <div className="mt-8 flex min-h-[300px] items-center justify-center rounded-xl border border-dashed bg-white">
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-[#00383B]">
                        No blogs yet
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Create your first blog to get started.
                    </p>

                    <Button
                         
                        className="mt-4 bg-[#2FC2B0] text-white hover:bg-[#24ad9e] "
                    >
                        <Link href="/admin/blogs/create-blog" className="flex cursor-pointer">
                            <Plus className="mr-2 size-4" />
                            Create Blog
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}