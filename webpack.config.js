/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/config/bootstrap.js",
    output: {
        filename: "bundle.js",
        path: "./dist"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["react-hot-loader", "babel-loader?presets[]=react,presets[]=es2015"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|eot|woff|woff2|ttf|svg)$/,
                loader: "file-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules", "app"],
        alias: {
            "swiper": "swiper/dist/js/swiper.js",
            "widgets": "widgets"
        }
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new Webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.STATUS) || "'PROD'"
        }),
        new Webpack.ProvidePlugin({
            Swiper: "swiper"
        })
    ]
};