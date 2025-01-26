import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'cdn.sanity.io'], 
  },
};

export default nextConfig;