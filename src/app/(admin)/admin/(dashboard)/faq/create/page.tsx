import CreateFAQForm from "@/components/FAQForm";
import { prisma } from "@/lib/prisma";

export default async function CreateFAQPage() {
    const [destinations, packages] = await Promise.all([
        prisma.destination.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: "asc",
            },
        }),

        prisma.package.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: "asc",
            },
        }),
    ]);

    return (
        <div className="mx-auto w-full max-w-7xl">
            <CreateFAQForm
                destinations={destinations}
                packages={packages}
            />
        </div>
    );
}