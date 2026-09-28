 import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,

    outputFileTracingIncludes: {
        "/*": [
            "./src/generated/prisma/libquery_engine-rhel-openssl-3.0.x.so.node",
        ],
    },

    serverExternalPackages: [
        "@prisma/client",
        "prisma",
    ],

    async redirects() {
        return [
            {
                source: "/package/himachal-pradesh/shimla",
                destination: "/offers/package/shimla",
                permanent: false,
            },
            {
                source: "/packages/himachal-pradesh/shimla",
                destination: "/offers/package/shimla",
                permanent: false,
            },
            {
                source: "/package/goa",
                destination: "/offers/package/goa",
                permanent: false,
            },
            {
                source: "/packages/goa",
                destination: "/offers/package/goa",
                permanent: false,
            },
            {
                source: "/package/ayodhya",
                destination: "/offers/package/ayodhya",
                permanent: false,
            },
            {
                source: "/packages/ayodhya",
                destination: "/offers/package/ayodhya",
                permanent: false,
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;
 
