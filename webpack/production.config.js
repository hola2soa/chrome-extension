const path    = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    vendors: ['react','react-dom']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // Optimization
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/,      loader: 'babel', exclude: /node_modules/, query: { stage: 0 } },
      { test: /\.json$/,      loader: 'json' },
      { test: /\.styl$/,      loader: 'style!css!stylus' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.styl']
  }
};
