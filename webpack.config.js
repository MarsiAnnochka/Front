const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "/public"),
        open: true,
        historyApiFallback: true,
        proxy:{
            '/api/':{
                target:{
                    host: '127.0.0.1',
                    port: 8080,
                    protocol: 'http'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [',', '.js']
    }

};
