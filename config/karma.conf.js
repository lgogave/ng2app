module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './config/spec-bundle.js', watched: false }
    ],
    exclude: [
    ],
    preprocessors: {
      './config/spec-bundle.js': ['webpack','sourcemap']
    },
    webpack: require('./webpack.test')({env: 'test'}),

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i.e.
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
        // options i.e. 
        chunks: false
      }
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}