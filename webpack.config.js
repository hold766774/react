var HtmlWebpackPlugin = require('html-webpack-plugin');
var path=require("path");
module.exports = {
    entry: {//入口文件
        webindex: "./src/js/index",

    },
    output: {//输出文件
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].js",
        path: __dirname + '/build'
    },
    plugins: [
        new HtmlWebpackPlugin({//引入插件构建html
            filename: 'index.html',
            template: './src/pages/index.html',
            chunks:["webindex"]  //多个入口节点
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    externals: {//排除
        "react": 'React',
        "react-dom": 'ReactDOM',
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};