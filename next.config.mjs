/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "localhost"],
  },
  headers: async () => {
    return process.env.NEXT_PUBLIC_MODE === "development"
      ? [
          {
            source: "/:path*",
            headers: [
              {
                key: "X-Robots-Tag",
                value: "noindex, nofollow",
              },
            ],
          },
        ]
      : [];
  },
  rewrites: async () => {
    return process.env.NEXT_PUBLIC_MODE === "development"
      ? [
          {
            source: "/robots.txt",
            destination: "/libs/robots",
          },
        ]
      : [];
  },
};

export default nextConfig;
