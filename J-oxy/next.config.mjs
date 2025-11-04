/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['oxylabs.io', 'ltus-acadamy--paji-duolingo.europe-west4.hosted.app'],
    unoptimized: true, // Better for static hosting on Netlify
  },
  // Optimize for Netlify deployment
  output: 'standalone',
};

export default nextConfig;
