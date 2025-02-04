const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Add Webpack rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[hash][ext][query]',
      },
    });

    config.resolve.alias['@alias'] = path.resolve(__dirname, 'path/to/alias');
    return config;
  },
};

module.exports = nextConfig;
