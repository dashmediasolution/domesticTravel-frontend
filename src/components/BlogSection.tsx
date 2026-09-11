"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "10 Best Places to Visit in Manali in Summer",
    date: "May 10, 2004",
    image: "/images/featuredImages/image_1.png",
    slug: "10-best-places-to-visit-in-manali-in-summer",
  },
  {
    id: 2,
    title: "10 Best Places to Visit in Manali in Summer",
    date: "May 10, 2004",
    image: "/images/featuredImages/image_2.png",
    slug: "best-places-to-visit-in-manali",
  },
  {
    id: 3,
    title: "10 Best Places to Visit in Manali in Summer",
    date: "May 10, 2004",
    image: "/images/featuredImages/image_3.png",
    slug: "manali-travel-guide",
  },
  {
    id: 4,
    title: "10 Best Places to Visit in Manali in Summer",
    date: "May 10, 2004",
    image: "/images/featuredImages/image_4.png",
    slug: "manali-summer-guide",
  },
  {
    id: 5,
    title: "10 Best Places to Visit in Manali in Summer",
    date: "May 10, 2004",
    image: "/images/featuredImages/image_5.png",
    slug: "top-manali-destinations",
  },
  {
    id: 6,
    title: "10 Best Places to Visit in Manali in Summer",
    date: "May 10, 2004",
    image: "/images/featuredImages/image_6.png",
    slug: "manali-trip-guide",
  },
];

export default function BlogSection() {
  return (
    <section className="w-[95%] rounded-[28px] border border-black/10 bg-white px-5 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7 lg:px-7 lg:py-6">
      <div className="mb-6 flex   items-center justify-between gap-4">
        <h2 className="md:text-2xl font-semibold tracking-[-0.02em] text-black sm:text-[24px]">
          From Our Blog
        </h2>

        <Link
          href="/blogs"
          className="shrink-0 rounded-full border border-teal-500 px-4 py-2 text-lg font-medium text-teal-500 transition-all duration-200 hover:bg-teal-500 hover:text-white sm:px-5 sm:py-2.5"
        >
          View All Blogs
        </Link>
      </div>

      <div className="grid grid-cols-1  gap-x-10 gap-y-6 md:grid-cols-2 lg:gap-x-16">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="group flex min-w-0 items-center gap-3.5 rounded-2xl sm:gap-4"
          >
            <div className="relative md:h-25 md:w-33 shrink-0 overflow-hidden rounded-[18px] sm:h-[100px] sm:w-[134px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                
                className="object-cover transition-transform duration-500  "
              />
            </div>

            <div className="min-w-0">
              <h3 className="line-clamp-2 md:text-2xl font-semibold leading-[1.35] tracking-[-0.01em] text-black transition-colors duration-200 group-hover:text-teal-500 sm:text-[17px]">
                {blog.title}
              </h3>

              <p className="mt-1.5 text-sm text-[#A7ADB7] sm:text-[15px] md:text-xl">
                {blog.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}