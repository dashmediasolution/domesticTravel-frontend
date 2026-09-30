import BannerTable from "@/components/admin/banners/BannerTable";

export default function BannersPage() {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Banners
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage promotional banners displayed
                    across the website.
                </p>
            </div>

            <BannerTable />
        </div>
    );
}