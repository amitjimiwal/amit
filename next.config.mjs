/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol:"https",
        hostname:"miro.medium.com"
      }
    ],
  },
};

export default nextConfig;
