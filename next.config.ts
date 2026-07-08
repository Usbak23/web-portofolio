import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Modern formats — avif first (best compression), then webp as fallback
    formats: ["image/avif", "image/webp"],

    // Device sizes for responsive images (matches common breakpoints)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Image sizes for fixed-layout images (thumbnails, avatars, etc.)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimize layout shift by enforcing width/height
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}

export default nextConfig
