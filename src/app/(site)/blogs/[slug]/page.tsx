import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    CalendarDays,
    ChevronLeft,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

interface BlogPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: BlogPageProps) {
    const { slug } = await params;

    const blog = await prisma.blog.findUnique({
        where: {
            slug,
        },
    });

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: blog.title,
        description:
            blog.excerpt ||
            `Read ${blog.title} on Domestic Travel`,
    };
}

export default async function BlogPage({
    params,
}: BlogPageProps) {
    const { slug } = await params;

    const blog = await prisma.blog.findUnique({
        where: {
            slug,
        },
        include: {
            category: true,
        },
    });

    if (!blog) {
        notFound();
    }

    const formattedDate = blog.publishedAt
        ? new Intl.DateTimeFormat("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
          }).format(blog.publishedAt)
        : null;

    return (
        <main className="min-h-screen bg-white">
            <article className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mx-auto max-w-4xl">

                    <Link
                        href="/blogs"
                        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#00383B] transition-colors hover:text-[#2FC2B0]"
                    >
                        <ChevronLeft className="size-4" />
                        Back to Blogs
                    </Link>

                    <div className="mb-5 flex flex-wrap items-center gap-3">

                        {blog.category && (
                            <Link
                                href={`/blogs/category/${blog.category.name}`}
                                className="rounded-full bg-[#2FC2B0]/10 px-4 py-1.5 text-sm font-semibold text-[#00383B]"
                            >
                                {blog.category.name}
                            </Link>
                        )}

                        {formattedDate && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <CalendarDays className="size-4" />
                                <span>
                                    {formattedDate}
                                </span>
                            </div>
                        )}

                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#00383B] sm:text-5xl lg:text-6xl">
                        {blog.title}
                    </h1>

                    {blog.excerpt && (
                        <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                            {blog.excerpt}
                        </p>
                    )}

                </div>

                {blog.featuredImage?.url && (
                    <div className="relative mx-auto mt-8 aspect-[16/8] w-full max-w-6xl overflow-hidden rounded-2xl sm:mt-10 sm:rounded-3xl">
                        <Image
                            src={blog.featuredImage.url}
                            alt={blog.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1200px"
                        />
                    </div>
                )}

                <div className="mx-auto mt-10 max-w-4xl sm:mt-14">

                    <div
                        className="
                            text-base
                            leading-8
                            text-gray-700
                            sm:text-lg
                            sm:leading-9

                            [&_h1]:mb-5
                            [&_h1]:mt-10
                            [&_h1]:text-3xl
                            [&_h1]:font-bold
                            [&_h1]:leading-tight
                            [&_h1]:text-[#00383B]

                            [&_h2]:mb-4
                            [&_h2]:mt-10
                            [&_h2]:text-2xl
                            [&_h2]:font-bold
                            [&_h2]:leading-tight
                            [&_h2]:text-[#00383B]
                            sm:[&_h2]:text-3xl

                            [&_h3]:mb-3
                            [&_h3]:mt-8
                            [&_h3]:text-xl
                            [&_h3]:font-bold
                            [&_h3]:text-[#00383B]
                            sm:[&_h3]:text-2xl

                            [&_p]:mb-5

                            [&_ul]:mb-6
                            [&_ul]:list-disc
                            [&_ul]:pl-6

                            [&_ol]:mb-6
                            [&_ol]:list-decimal
                            [&_ol]:pl-6

                            [&_li]:mb-2

                            [&_a]:font-medium
                            [&_a]:text-[#20BFAF]
                            [&_a]:underline
                            [&_a]:underline-offset-4

                            [&_blockquote]:my-8
                            [&_blockquote]:border-l-4
                            [&_blockquote]:border-[#2FC2B0]
                            [&_blockquote]:pl-5
                            [&_blockquote]:italic
                            [&_blockquote]:text-gray-600

                            [&_img]:my-8
                            [&_img]:h-auto
                            [&_img]:w-full
                            [&_img]:rounded-2xl

                            [&_strong]:font-bold
                            [&_strong]:text-[#00383B]

                            [&_code]:rounded
                            [&_code]:bg-gray-100
                            [&_code]:px-1.5
                            [&_code]:py-1
                            [&_code]:text-sm

                            [&_pre]:my-8
                            [&_pre]:overflow-x-auto
                            [&_pre]:rounded-xl
                            [&_pre]:bg-[#00383B]
                            [&_pre]:p-4
                            [&_pre]:text-sm
                            [&_pre]:text-white
                        "
                        dangerouslySetInnerHTML={{
                            __html: blog.content,
                        }}
                    />

                </div>

                {blog.tags.length > 0 && (
                    <div className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-2 border-t border-gray-200 pt-8 sm:mt-14">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

            </article>
        </main>
    );
}