import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // webp: broadly supported including Safari 14+
    // avif removed — Safari < 16 does not support it and would serve degraded images
    formats: ["image/webp"],

    // Device sizes for responsive images (matches common breakpoints)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Image sizes for fixed-layout images (thumbnails, avatars, etc.)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimize layout shift by enforcing width/height
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}

export default nextConfig
