"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
    id: string;
    title: string;
    slug: string;
    publishedAt?: string | null;
    featuredImage?: {
        url?: string;
    } | null;
}

export default function BlogSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    "/api/blogs/search-blogs?page=1&limit=6"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }

                const result = await response.json();

                setBlogs(result?.data?.blogs?.slice(0, 6) || []);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (!loading && blogs.length === 0) {
        return null;
    }

    return (
        <section className="w-[95%] rounded-[28px] border border-black/10 bg-white px-5 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7 lg:px-7 lg:py-6">
            <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="font-semibold tracking-[-0.02em] text-black sm:text-[24px] md:text-2xl">
                    From Our Blog
                </h2>

                <Link
                    href="/blogs"
                    className="shrink-0 rounded-full border border-teal-500 px-3 py-1 text-md font-medium text-teal-500 transition-all duration-200 hover:bg-teal-500 hover:text-white "
                >
                    View All Blogs
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2 lg:gap-x-16">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/blogs/${blog.slug}`}
                        className="group flex min-w-0 items-center gap-3.5 rounded-2xl sm:gap-4"
                    >
                        <div className="relative h-[80px] w-[105px] shrink-0 overflow-hidden rounded-[18px] sm:h-[100px] sm:w-[134px] md:h-25 md:w-33">
                            {blog.featuredImage?.url && (
                                <Image
                                    src={blog.featuredImage.url}
                                    alt={blog.title}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 639px) 105px, 134px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            )}
                        </div>

                        <div className="min-w-0">
                            <h3 className="line-clamp-2 font-semibold leading-[1.35] tracking-[-0.01em] text-black transition-colors duration-200 group-hover:text-teal-500 sm:text-[15px] md:text-xl">
                                {blog.title}
                            </h3>

                            <p className="mt-1.5 text-sm text-[#A7ADB7] sm:text-[15px] md:text-lg">
                                {blog.publishedAt
                                    ? new Date(
                                          blog.publishedAt
                                      ).toLocaleDateString("en-US", {
                                          month: "long",
                                          day: "numeric",
                                          year: "numeric",
                                      })
                                    : ""}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}