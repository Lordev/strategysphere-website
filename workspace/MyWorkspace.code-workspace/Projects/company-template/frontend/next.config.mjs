// ./frontend/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
			{
				protocol: 'https',
				hostname: 'maps.googleapis.com',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
