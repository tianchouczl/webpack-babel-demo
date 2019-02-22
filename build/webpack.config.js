const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'main.js',
    path: path.resolve('', 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-babel-demo',
      template: 'index.html',
      inject: true
    })
  ]
}