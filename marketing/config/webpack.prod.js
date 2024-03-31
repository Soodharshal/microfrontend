const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson  = require('../package.json')
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode : 'production',
    output: {
        filename: '[name].[contenthash].js',
        // path: path.resolve(__dirname, './dist'),
        // publicPath: 'http://localhost:8000/'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'kiwi.html',
        //     title: 'Kiwi',
        //     description: 'Kiwi',
        //     template: 'src/page-template.hbs'
        // }),
        new ModuleFederationPlugin({
            name: "marketing",
            filename: 'remoteEntry.js',
            exposes: {
                // KiwiApp: "KiwiApp@http://localhost:8000/remoteEntry.js",
                // HelloWorldApp: 'HelloWorldApp@http://localhost:9000/remoteEntry.js',
                './MarketingApp':'./src/bootstrap.js',
            },
            // remotes:{
            //     marketing: `marketing@${domain}/marketing/remoteEntry.js`
            // },
            shared :packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,prodConfig);