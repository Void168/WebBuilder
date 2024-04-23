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
    }
};

export default nextConfig;
