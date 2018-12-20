const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            COMPANY_NAME: JSON.stringify('UAB „Paysera LT“'),
            HR_MANAGER: JSON.stringify('Indrė Andriulevičiūtė'),
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist/*.*')], {
            root: process.cwd(),
            verbose: true,
            dry: false
        }),
    ],
});
