/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['romaktrading.com'], // اضافه در صورت نیاز به تصاویر خارجی
  },
};

export default nextConfig;
