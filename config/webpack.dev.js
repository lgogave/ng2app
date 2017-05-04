var webPack = require('webpack');
var htmlWebPack = require('html-webpack-plugin');
var extractTextWebPackPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var config = {
  entry: {
    'app': './app/main.ts',
    'libs': './stdpkgs.ts',
    'polyfills': './polyfills.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', 'css', 'scss']
  },
  module: {
    exprContextCritical: false,
    loaders: [{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[ext]'
    },
    {
      test: /\.s?css$/,
      use: ["raw-loader", "sass-loader"]
    },

    { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000' },
    { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports-loader?jQuery=jquery' }
    ]
  },
  plugins: [
    new webPack.optimize.CommonsChunkPlugin({
      name: ['app', 'libs', 'polyfills']
    }),

    new htmlWebPack({
      template: './index.html'
    }),
    new webPack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  output: {

    publicPath: 'http://localhost:9090/',
    filename: '[name].js',

  },
};
module.exports = config;