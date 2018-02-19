const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background.js'
  },
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'build')
  },
  target: "electron-main",
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './src/package.json', to: './package.json'}
    ])
  ],
});
