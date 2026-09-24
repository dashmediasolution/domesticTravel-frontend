import BlogForm from "@/components/admin/blogs/BlogForm";

export default async function NewBlogPage() {
    const categories = [
        {
             name: "Travel",
         },
        {
             name: "Adventure",
         },
        {
             name: "Destinations",
         },
    ];

    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-[#00383B] sm:text-3xl">
                    Create Blog
                </h1>

                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                    Create and publish a new travel blog.
                </p>
            </div>

            <BlogForm categories={categories} />
        </div>
    );
}