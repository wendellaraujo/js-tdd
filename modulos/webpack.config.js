const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: './build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
}