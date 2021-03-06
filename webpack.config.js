const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  
  entry: './src/main.ts',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist-stage0'),
    filename: 'ld44bundle.js'
  },

  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        output: {
          ascii_only: true
        }
      }
    })],
  }
};
