//创建webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:'./app.js', //入口文件
    output:{
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        path: path.resolve(__dirname, './build'), //输出位置
        filename:'bundle.js' //输入文件
    },
    mode: 'development',
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        open: true, //自动打开浏览器
        hot: true //热更新
    },
    module:{
        rules:[
            { test:/\.css$/, loader:'style-loader!css-loader' },
            { test:/\.scss$/, loader:'style-loader!css-loader!sass-loader' },
            {
                test:/\.css$/,
                // 使用 'style-loader','css-loader'
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{loader:'url-loader'}]
            }
        ]
    },
    //其他解决方案配置
   /*  resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    }, */
}