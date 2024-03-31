const { merge } = require('webpack-merge')
// const HtmlWebpackPlugin  = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig  = {
    mode: 'development',
    devServer: {
        port: 1000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
          name: 'container',
          remotes:{
          remotes:{
            marketing : 'marketing@http://localhost:2000/remoteEntry.js'
          },
           shared: ['react','react-dom']
        }),
       
    ]
}
module.exports = merge(commonConfig, devConfig)