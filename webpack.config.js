module.exports = {
    entry: './src/index.js', //入口文件，src下的index.js
    output: {
        path: path.join(__dirname, 'dist'), // 出口目录，dist文件
        filename: '[name].[hash].js' //这里name就是打包出来的文件名，因为是单入口，就是main，多入口下回分解
    },
    module: {
        rules: {
            test: /\.css$/,
            use: ['style-laoder', 'css-loader'],
            include: path.join(__dirname, 'src'), //限制范围，提高打包速度
            exclude: /node_modules/
        }
    },
    plugin: {},
    devServer: {
        contentBase: path.join(__dirname, "dist"), //静态文件根目录
        port: 9090, // 端口
        host: 'localhost',
        overlay: true,
        compress: true // 服务器返回浏览器的时候是否启动gzip压缩
    }
}