const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { spawn } = require('child_process');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  entry: {
    background: './src/index.jsx'
  },
  output: {
    filename: 'htmlapp.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: './build',
    port: 8081,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before() {
      spawn(
        'electron',
        ['.'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(0))
      .on('error', spawnError => console.error(spawnError))
    }
  },
  plugins: [
    new CleanWebpackPlugin(['build', 'release']),
    new CopyWebpackPlugin([
      {from: './template/index.html', to: './index.html'}
    ])
  ]
 });
