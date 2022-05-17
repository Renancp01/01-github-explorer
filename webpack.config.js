const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')
const processArguments = require('webpack-dev-server/types/bin/process-arguments')
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    //Configuração devServer
    devServer: {
        static: path.resolve(__dirname, 'public')
    },

    //Validar o porque
    plugins: [
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    //Validar o porque
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}