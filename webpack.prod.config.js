var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: ['./app/components'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[id].chunk.[chunkhash:8].js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'app'],
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style?sourceMap', [
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'resolve-url',
                    'sass?outputStyle=expanded&sourceMap'
                ])
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?name=[hash:8].[name].[ext]&limit=8192',
                    'img'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          isBrowser: true,
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new ExtractTextPlugin("[name].[contenthash:8].css", {
          allChunks: true,
          disable: false
        }),
        new HtmlWebpackPlugin({
          title: "kreding",
          filename: "frame.html",
          favicon: "favicon.ico",
          template: path.join(__dirname, "app/frame.js")
        }),
        new webpack.NoErrorsPlugin()
    ],
    target: 'node',
    externals: nodeModules
};
