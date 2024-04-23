/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'uploadthing.com',
            'utfs.com',
            'img.clerk.com',
            'subdomain',
            'files.stripe.com'
        ]
    },
    reactStrictMode: false
};

export default nextConfig;
