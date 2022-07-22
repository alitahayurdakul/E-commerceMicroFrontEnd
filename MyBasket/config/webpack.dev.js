const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig ={
    mode:'development',
    output: {
        publicPath: 'http://localhost:8083/'
    },
    devServer: {
        port: 8083,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'bag',
            filename: 'remoteEntry.js',
            exposes: {
                './BagApp':'./src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);