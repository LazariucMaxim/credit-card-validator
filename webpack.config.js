const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
            {
                test: /\.card$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', path.resolve(__dirname, 'loaders/card-loader.js')],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: './main.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
          })
      ]
};