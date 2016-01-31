var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/components',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'app'],
        extensions: ['', '.js', '.jsx', 'scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({isBrowser: true})
    ]
};
