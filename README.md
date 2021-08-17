# roninwz-plugin

查看打包后文件列表大小插件

## 安装

`npm i roninwz-plugin -D`

## webpack 使用

```js
const path = require("path");
const FileListPlugin = require("roninwz-plugin");
module.exports = {
  target: "node",
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  plugins: [
    new FileListPlugin({
      filename: "list.md",
    }),
  ],
};
```

## vue-cli3 使用

```js
const FileListPlugin = require("roninwz-plugin");
module.exports = {
  configureWebpack: (config) => {
    // 使用打包后生成文件可看文件大小插件
    config.plugins.push(
      new FileListPlugin({
        filename: "list.md",
      })
    );
  },
};
```
