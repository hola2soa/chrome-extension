module.exports = {
  entry: [
  	'./src/index.js'
  ],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: { stage: 0 } }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}