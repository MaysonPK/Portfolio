const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: ["src/index.html", "src/output.css", "src/images/"],

      }),
  ]
};