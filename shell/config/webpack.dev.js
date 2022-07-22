const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    plugins: [

        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                home: 'home@http://localhost:8081/remoteEntry.js',
                card: 'home@http://localhost:8081/remoteEntry.js',
                searchProduct: 'searchProducts@http://localhost:8082/remoteEntry.js',
                bag: 'bag@http://localhost:8083/remoteEntry.js'
            },
            shared: packageJson.dependencies
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        })

    ]
}

module.exports = merge(commonConfig, devConfig)