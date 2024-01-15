/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    FIDELIXMAX_API: "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com", // This is just an example, if it were a production project the urls would be in a .env file
    JSONPLACEHOLDER_API: "https://jsonplaceholder.typicode.com",
  },
};

module.exports = nextConfig;
