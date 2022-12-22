const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const common = require('./webpack.common.js');

const production = merge(common, {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: ['...', new MiniCssExtractPlugin()], // "..." used to include default minimizers
  },

  plugins: [
    new ProgressBarPlugin({
      format:
        '  build \x1b[35m[:bar]\x1b[0m \x1b[34m:percent\x1b[0m (\x1b[33m:elapsed seconds\x1b[0m)',
      clear: false,
      width: 60,
      complete: '*',
      incomplete: ' ',
      renderThrottle: 16,
    }),
  ],
});

module.exports = production;
