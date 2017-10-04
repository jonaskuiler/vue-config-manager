'use strict'

const babel = require('./rules/babel')
const eslint = require('./rules/eslint')
const config = require('../package.json')

module.exports = {
  entry: [
    __dirname + '/../src'
  ],
  output: {
    path: __dirname + '/../dist',
    publicPath: '/',
    filename: `${config.name}.js`,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [babel, eslint]
  },
  plugins: []
}
