const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

// MARK: -- override defaults here
module.exports = ({ mode, present } = { mode: "production", presets: [] }) => {
	console.log(mode);
	return {
		mode,
		output: {
			filename: "bundle.js"
		},
		plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()]
	};
};