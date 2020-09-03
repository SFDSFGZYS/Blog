const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].bundle.js',
        chunkFilename: 'js/[name]-[chunkhash].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        port: '5233',
        open: true,
        proxy: {
            '/api': 'http://localhost:52333',
            pathRewrite: {
                '^/api': ''
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new CleanWebpackPlugin() // 清理dist文件夹
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};
