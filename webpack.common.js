const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Giftcard',
  template: 'client/src/index.html',
  filename: 'index.html'
});

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.jsx'),
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: '[hash].bundle.js',
    publicPath: '/'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss|sass)/i,
        use: [
          MiniCssExtractPlugin.loader,
          // { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          "postcss-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      "@components": path.resolve(__dirname, 'client/src/components/'),
      "@helpers": path.resolve(__dirname, 'client/src/helpers/'),
      "@reducers": path.resolve(__dirname, 'client/src/reducers/'),
      "@actions": path.resolve(__dirname, 'client/src/actions/'),
      "@constant": path.resolve(__dirname, 'client/src/constants/'),
      "@containers": path.resolve(__dirname, 'client/src/containers/'),
      "@utils": path.resolve(__dirname, 'client/src/utils/'),
      "@config": path.resolve(__dirname, 'client/src/config/'),
      "@base": path.resolve(__dirname, 'client/public/')
    }
  },
  plugins: [
    htmlPlugin,
    new Dotenv({
      path: './env'
    }),
    new MiniCssExtractPlugin({
      filename: "client/public/stylesheet/styles.css",
      chunkFilename: "styles.css"
    }),
  ]
};
