import CreateDestinationForm from "@/components/admin/destinations/create-destination-from";

export default function CreateDestinationPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Create Destination
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Add a new travel destination to your website.
                </p>
            </div>

            <CreateDestinationForm />
        </div>
    );
}