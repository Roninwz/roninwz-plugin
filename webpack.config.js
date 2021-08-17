const path = require("path")
const FileListPlugin = require('./lib/index');
module.exports = {
  target: "node",
  mode: "development",
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  plugins: [
    new FileListPlugin({
      filename: 'list.md'
    }),
  ],
}