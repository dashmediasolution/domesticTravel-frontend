import "server-only";

export interface PackageData {
    id?: string;
    name?: string;
    slug?: string;
    subtitle?: string;
    description?: string;
    location?: string;
    duration?: number | string;
    budget?: string | number;
    rating?: number;
    reviewsCount?: number;
    heroImage?: {
        url?: string;
    };
    gallery?: Array<{
        url?: string;
    }>;
    originalPrice?: number;
    offerPrice?: number | null;
    offers?: Array<{
        slug?: string;
    }>;
    seoTitle?: string;
    metaTitle?: string;
    seoDescription?: string;
    metaDescription?: string;
    metaKeywords?: string[] | string;
    canonicalUrl?: string;
    ogImage?: string;
    noIndex?: boolean;
    updatedAt?: string;
    [key: string]: unknown;
}

interface PackageApiResponse {
    success: boolean;
    data?: PackageData;
    message?: string;
}

const SITE_URL =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

export async function getPackageBySlug(
    locationSlug: string,
    packageSlug: string
): Promise<PackageData | null> {
    try {
        const url = new URL(
            `/api/packages/${encodeURIComponent(locationSlug)}/${encodeURIComponent(packageSlug)}`,
            SITE_URL
        );

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            next: {
                revalidate: 300,
                tags: [
                    `package-${locationSlug}-${packageSlug}`,
                ],
            },
        });

        if (!response.ok) {
            if (response.status !== 404) {
                console.error(
                    "Package API request failed:",
                    response.status
                );
            }

            return null;
        }

        const result =
            (await response.json()) as PackageApiResponse;

        if (!result.success || !result.data) {
            return null;
        }

        return result.data;
    } catch (error) {
        console.error("Failed to fetch package data:", error);
        return null;
    }
}