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
				source: "/:api*",
				destination: "http://lsx2003.direct.quickconnect.to:4000/:api*",
			},
		];
	},


};

module.exports = nextConfig;
