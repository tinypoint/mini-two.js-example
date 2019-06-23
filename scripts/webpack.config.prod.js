const commonConfig = require("./webpack.config");

commonConfig.mode = "production";
commonConfig.output.publicPath = "/mini-two.js-example/";

module.exports = commonConfig;
