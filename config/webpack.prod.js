var webPack = require('webpack');
var htmlWebPack = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');
var copywebpackPlugin = require('copy-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

// var extractTextWebPackPlugin = require('extract-text-webpack-plugin');

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
  devtool: 'source-map',
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
    // {
    //   test: /\.css$/,
    //   use: ['to-string-loader', 'css-loader'],
    //   exclude: [helpers.root('src', 'styles')]
    // },

  {
      test: /\.s?css$/,
      use: ["raw-loader", "sass-loader"]
    },
    { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000' },
    { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports-loader?jQuery=jquery' }
    ]
  },
  plugins: [
    new htmlWebPack({
      template: "./index.html"
    }),

    new webPack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./'), // location of your src
      {} // a map of your routes
    ),
    new webPack.optimize.CommonsChunkPlugin({
      name: ['app', 'libs', 'polyfills']
    }),
    new webPack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webPack.NoEmitOnErrorsPlugin(),
    new webPack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    // new ExtractTextPlugin('[name].[hash].css'),
    new webPack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webPack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new copywebpackPlugin([
      { from: './assets', to: 'assets' }
    ]),
    new copywebpackPlugin([
      { from: './scripts', to: 'scripts' }
    ])
   
  ],
  output: {
    path: helpers.root('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  }

};
module.exports = webpackMerge(config);