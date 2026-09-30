import CreateBannerForm from "@/components/admin/banners/CreateBannerForm";

export default function CreateBannerPage() {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Create Banner
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Create and schedule a promotional banner
                    for your website.
                </p>
            </div>

            <CreateBannerForm />
        </div>
    );
}