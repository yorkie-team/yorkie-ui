const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    }
    return config;
  },
};
