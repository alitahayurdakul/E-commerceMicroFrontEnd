const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
    },
    devServer: {
        port: 8082,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'searchProducts',
            filename: 'remoteEntry.js',
            exposes: {
                './SearchProductsApp':'./src/bootstrap',
            },
            remotes: {
                card: 'home@http://localhost:8081/remoteEntry.js',
            },

            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

module.exports = merge(commonConfig, devConfig);