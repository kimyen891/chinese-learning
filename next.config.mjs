/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/chinese-learning',
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                pathname: '/chinese-learning/**',
            },
        ],
    },
};

export default nextConfig;
