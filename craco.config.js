const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new webpack.EnvironmentPlugin({
          ...process.env,
        })
      );
      return webpackConfig;
    },
  },
};
