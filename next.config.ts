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
 
