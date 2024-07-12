/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: "incremental", // Allows to adopt ppr for specific routes 
    }
};

export default nextConfig;
