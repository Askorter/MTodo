const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
// const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: { app: path.join(__dirname, "src/index.js") },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  resolve: { extensions: [".js", ".json", ".css", "scss"] },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: "url-loader",
          options: { outputPath: "images/", limit: 5 * 1024 }
        }
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    // filename: '[name].[hash].css',
    // chunkFilename: '[id].[hash].css',
    // }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({ $: "jquery" }),
    // new CopyWebpackPlugin([
    // {
    // from: path.resolve(__dirname, 'static'),
    // to: path.resolve(__dirname, 'pages/static'),
    // ignore: ['.*']
    // }
    // ]),
    new ProgressBarPlugin({
      format:
        " build [:bar] (:elapsed seconds)"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["app"]
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: { index: "/src/index.html" },
    port: 8880,
    host: "localhost",
    overlay: true,
    compress: true,
    hot: true,
    stats: { colors: true }
  },
  devtool: "#eval-source-map"
};
