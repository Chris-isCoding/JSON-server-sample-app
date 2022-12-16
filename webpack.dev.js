const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    open: true,
    port: 8080,
    hot: true,
    static: { directory: './dist' },
    host: 'localhost',
    historyApiFallback: true,
  },
});
