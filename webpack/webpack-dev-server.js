//const Express = require('express')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./dev.config')
const compiler = webpack(config)

const server = new webpackDevServer(compiler, {
  contentBase: './build',

  hot: true,
  inline: true,
  stats: { colors: true },
})

server.listen(4000, function() {
  console.log('webpack server listening!');
})
