const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: devMode ? 'bundle.js' : '[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.js'],
    },
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Weather',
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{loader: MiniCssExtractPlugin.loader}, "css-loader"]
            },
            {
                test: /\.(svg|ttf|otf|eot?)(\?[a-z0-9]+)?$/,
                loader: devMode ? "url-loader" : "file-loader?name=./fonts/[name]_[hash].[ext]"
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3000
    },
    optimization: {
        usedExports: true
    }
};