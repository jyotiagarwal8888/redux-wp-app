var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
var mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode: mode,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: "source-map",
    // devServer: {
    //     contentBase: './dist'
    // },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}