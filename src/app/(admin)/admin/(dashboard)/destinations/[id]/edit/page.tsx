import EditDestinationForm from "@/components/admin/destinations/EditDestinationForm";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditDestinationPage({
    params,
}: Props) {
    const { id } = await params;

    return (
        <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">
                    Edit Destination
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Update destination information, images, attractions and SEO settings.
                </p>
            </div>

            <EditDestinationForm
                destinationId={id}
            />
        </div>
    );
}