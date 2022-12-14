
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

//CCON ESTOS PAQUETES HAY ERRORES
const CssMinimizer = required('css-minimizer-webpack-plugin');
const Terser = required('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    
    output:{
        clean:true,
        filename:'main.[contenthash].js'
    },
    
    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize:false,
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ['style-loader','css-loader']//Usar los paquetes que se instalaron
                
                
            },
            {
                test: /style.css$/i,
                use: [MiniCssExtract.loader,'css-loader']

            },
            {
                test: /\.(png|jpeg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins:[
        new HtmlWebpack({
            title: 'Mi WebPack App',
            //filename: 'index.html'
            template:'./src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to:'assets/'}
            ]
        })
    ]

};