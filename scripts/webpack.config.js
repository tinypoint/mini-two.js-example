const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    airplane: path.resolve(__dirname, "..", "src", "airplane", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "..", "public"),
    filename: "[name].[hash].js",
    publicPath: "/public/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "htmls", "airplane.html"),
      filename: "airplane.html"
    })
  ],
  serve: {
    hot: true
  }
};
