/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		minimumCacheTTL: 60, // Cache images for 60 seconds to reduce repeated fetches.
		deviceSizes: [640, 750, 828, 1080, 1200], // Limit the supported sizes.
		imageSizes: [16, 32, 48, 64, 96], // Optimize image sizes for better performance.
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
