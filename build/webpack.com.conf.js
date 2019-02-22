const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-babel-demo',
      template: 'index.html',
      inject: true
    })
  ]
}