 var path = require('path');
 var webpack = require('webpack');
 var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
 module.exports = {
     entry: ['./src/js/atd-hidden-height.js'],
     output: {
         path: path.resolve(__dirname, './dist/js'),
         filename: 'atd-hidden-height.js'
     },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
     module: {
         rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
     resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    }
 };
