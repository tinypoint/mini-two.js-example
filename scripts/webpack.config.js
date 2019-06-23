const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: {
    airplane: path.resolve(__dirname, "..", "src", "airplane", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "..", "public"),
    filename: "[name].js",
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  serve: {
    contentBase: path.join(__dirname, "..", "public"),
    hot: true
  }
};
