'use strict'

const webpack = require('webpack')

module.exports = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"' // this needs to be production for reducing file size
    }
  }),

  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false
    },
    comments: false,
    minimize: false
  })

]
