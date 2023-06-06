/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "http://sml2.synology.me:4000/:path*",
			},
		];
	},


};

module.exports = nextConfig;
