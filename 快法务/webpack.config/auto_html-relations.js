//本文件为自动生成，切勿手动修改
const HtmlWebpackPlugin = require("html-webpack-plugin");
// -----------------------------------
const _template = "./public/index.html";

//html模板对应（动态）
const _htmlPlugins = [new HtmlWebpackPlugin({
		filename: "main/index.html",
		template: _template,
		chunks: ["main"], //关联指向关键信息
		templateParameters: {
      title: "仿快法务首页"
    }
	}),new HtmlWebpackPlugin({
		filename: "_defaultPage/index.html",
		template: _template,
		chunks: ["_defaultPage"], //关联指向关键信息
		templateParameters: {
      title: ""
    }
	})];

module.exports = _htmlPlugins;