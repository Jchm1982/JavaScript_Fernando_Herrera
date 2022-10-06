
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    /*
    output:{
        clean:true
    },
    */
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
            }
        ]
    },
    optimization:{},

    plugins:[
        new HtmlWebpack({
            title: 'Mi WebPack App',
            //filename: 'index.html'
            template:'./src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to:'assets/'}
            ]
        })
    ]

};