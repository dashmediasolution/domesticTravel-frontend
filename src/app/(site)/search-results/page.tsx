import { Suspense } from "react";

import SearchResultsPage from "@/components/search/SearchResultsPage";

function SearchResultsFallback() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<SearchResultsFallback />}>
            <SearchResultsPage />
        </Suspense>
    );
}