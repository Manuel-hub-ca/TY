// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// const withVideos = require('next-videos');

// module.exports = withVideos();

const withVideos = require('next-videos');
const path = require('path');

const nextConfig = {};

module.exports = withVideos({
  webpack(config, options) {
    config.resolve.alias['@alias'] = path.resolve(__dirname, 'path/to/alias');
    return config;
  },
});
