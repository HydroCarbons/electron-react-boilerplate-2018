const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  target: 'electron-renderer',
  entry: {
    background: './src/index.jsx'
  },
  output: {
    filename: 'htmlapp.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(['build', 'release']),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new CopyWebpackPlugin([
      {from: './template/index.html', to: './index.html'}
    ])
  ]
});
