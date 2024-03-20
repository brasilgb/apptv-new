/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/apptv",
    assetPrefix: "/apptv",
    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false
            };
        }
        return config;
    }
};

export default nextConfig;
