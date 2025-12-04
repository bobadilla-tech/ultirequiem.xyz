/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},

	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/UltiRequiem",
				permanent: true,
			},
			{
				source: "/reddit",
				destination: "https://reddit.com/u/UltiRequiem",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/UltiRequiem",
				permanent: true,
			},

			{
				source: "/spotify",
				destination: "https://open.spotify.com/user/12168426446",
				permanent: true,
			},
			{
				source: "/twitter",
				destination: "https://x.com/UltiRequiem",
				permanent: true,
			},
			{
				source: "/x",
				destination: "https://x.com/UltiRequiem",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/eliazrk/",
				permanent: true,
			},
			{
				source: "/10",
				destination: "https://youtu.be/G5HcvgepK-I",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
