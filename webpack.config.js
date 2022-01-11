const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                loader: "css-loader"
            }
        ]
    },
    stats: { children: false }, 
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'/public', 'index.html'),
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://mnmdev.truestreamz.com/api'
        })
    }
}