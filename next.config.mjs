/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // keep your existing setting
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // leave empty unless using a custom port
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
