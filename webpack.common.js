const path = require('path');

module.exports = {
  entry: "./src/index.js",

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