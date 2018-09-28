const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: {
  //   app: './src/index.js',
  //   records: './recordsTable/index.js'
  // },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  module: {
    rules: [
        {
          test: /\.html$/,
          use: {
            loader: "babel-loader",
          }
          // enforce: "pre",
          // test: /\.js$/,
          // exclude: /node_modules/,
          // loader: "eslint-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
    ]
  }
  plugin: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })

  ]
};
