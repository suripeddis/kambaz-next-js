/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  experimental: {
    turbo: {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  },
};

export default nextConfig;