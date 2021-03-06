const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
     entry: path.resolve(__dirname, 'src/main.js'),
     output:{
          path: path.resolve(__dirname, 'dist')
     },
     module: {
          rules: [
               {
               test: /\.js$/,
                    loader: "babel-loader"
               },
               {
               test: /\.html$/,
                    use: [ {
                         loader: 'html-loader',
                              options: {
                                   minimize: true
                              }
                              
                         }
                    ]
               },
               {
                    test: /\.(s*)css$/,
                    loader: ['style-loader', 'css-loader', 'sass-loader']
               },
               {
                    test: /\.(ttf|eot|svg|woff2|woff)$/,
                    loader: 'file-loader'
               }
          ]
     },
     devServer: {
          contentBase: path.resolve(__dirname, 'dist'),
          port: 8080
     },

     plugins: [
          new HtmlWebpackPlugin(
               {
                    template: path.resolve(__dirname, 'src/index.html'),
                    filename: path.resolve(__dirname, 'dist/index.html')
               }
          )
               
     ]

}
