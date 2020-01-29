const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist"),
  },
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
      }
    ]
  }
});