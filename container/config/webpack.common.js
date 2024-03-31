module.exports = {
    module :{
        rules :[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Correct use of 'loader' instead of 'loaders'
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
            // Other rules
        ]
    }
}