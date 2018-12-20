const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            COMPANY_NAME: JSON.stringify('UAB „Paysera LT“'),
            HR_MANAGER: JSON.stringify('Indrė Andriulevičiūtė'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
