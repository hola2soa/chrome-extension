module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    colors: true,
    files: [
      // `function.prototype.bind` is missing in PhantomJS
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      // load test files here
      'tests.webpack.js'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.jsx?$/,      loader: 'babel', exclude: /node_modules/, query: { stage: 0 } },
          { test: /\.json$/,      loader: 'json' },
          { test: /\.styl$/,      loader: 'style!css!stylus' },
          { test: /\.(png|jpg)$/, loader: 'url?limit=25000' }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.json']
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
