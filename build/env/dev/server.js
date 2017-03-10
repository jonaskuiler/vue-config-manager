module.exports = {
  port: 8080,
  host: 'localhost',
  stats: {
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    noInfo: true,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    publicPath: false,
    colors: true,
    module: false
  },
  quiet: true,
  hot: false,
  historyApiFallback: true,
  publicPath: '/'
}
