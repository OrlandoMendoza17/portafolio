/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'porfolio.dev',
        // port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
};

export default nextConfig;
