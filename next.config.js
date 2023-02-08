/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "scriptverse.academy",
        protocol: "https",
        pathname: "/img/thumbnails/reactjs-multi-color-progress-bar.png",
      },
    ],
  },
};
