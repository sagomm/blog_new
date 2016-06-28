const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath:path.resolve(___dirname,'dist/'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, 
                loader:ExtractTextPlugin.extract("style", "css") 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(),
        new HtmlWebpackPlugin({
            favion: './src/img/favion.ico',
            filename: 'view/index.html',
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
};
