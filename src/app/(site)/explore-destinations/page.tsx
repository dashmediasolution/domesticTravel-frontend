import ExploreDestinationsPage from "@/components/destination/ExploreDestinationsPage";

interface PageProps {
    searchParams: Promise<{
        search?: string;
    }>;
}

export default async function ExploreDestinationsRoute({
    searchParams,
}: PageProps) {
    const { search = "" } = await searchParams;

    return <ExploreDestinationsPage initialSearch={search} />;
}
