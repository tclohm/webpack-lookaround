const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

// MARK: -- override defaults here
module.exports = () => ({
	output: {
		filename: "bundle.js"
	},
	plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()]
})