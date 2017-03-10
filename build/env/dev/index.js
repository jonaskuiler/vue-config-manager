'use strict'
const config = require('../../base.config')
const serverOptions = require('./server')
const plugins = require('./plugins')
const merge = require('webpack-merge')

module.exports = merge.smart({}, config, {
  devtool: 'eval-source-map',
  devServer: serverOptions,
  plugins: config.plugins.concat(plugins)
})
