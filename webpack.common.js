const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  plugins: [new htmlWebPackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", // Injects Styles into DOM
         "css-loader", // Turns CSS into common js
          "sass-loader"] // Turns SCSS into css
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets",
            esModule: false,
          }
        }
      }
    ]
  }
};