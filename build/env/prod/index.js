'use strict'
const config = require('../../base.config')
const merge = require('webpack-merge')
const plugins = require('./plugins')

module.exports = merge.smart({}, config, {
  plugins
})
