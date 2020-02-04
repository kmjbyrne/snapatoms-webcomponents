const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function init() {
    let config = {};
    config.entry = {
        app: [
            './components/index.ts',
            './components/index.scss'
        ]
    };

    config.output = {
        path: path.resolve(__dirname, '../build'),
        // filename: '[name].bundle.js?version=[hash]'
    };

    // config.output = {
    //     path: path.resolve(__dirname, '../app/static/build'),
    //     filename: '[name].[hash].bundle.js', // '[name].[hash].bundle.js',
    //     publicPath: '/static/build'
    // };

    config.resolve = {
        extensions: ['.ts', '.js', '.css', '.scss', '.html', '.json']
    };

    config.devtool = 'inline-source-map';

    config.devServer = {
        inline: true,
        port: 8080,
        contentBase: './'
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ];

    config.module = {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            },
        ]
    }
    return config;
};
// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}