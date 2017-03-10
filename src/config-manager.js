/**
 * The config dictionary
 *
 * @type {Object}
 */
let config = {}

/**
 * Default options
 *
 * @type {Object}
 */
const defaultOptions = {
  environment: {},
  defaults: {}
}

/**
 * Merge options into a flattened config
 *
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
export const mergeConfig = (options = defaultOptions) => {
  const { environment, defaults } = options

  return Object.assign({}, defaults, environment)
}

/**
 * Get a deeply nested value from an object
 *
 * @param  {[type]} object [description]
 * @param  {[type]} path   [description]
 * @return {[type]}        [description]
 */
export const getDeepValue = (object, path) => {
  const fragments = path.split('.')

  return fragments.reduce((acc, n) => {
    if (typeof acc !== 'object') {
      return
    }

    return acc[n]
  }, object)
}

/**
 * The main config method
 */
export const configure = (input) => {
  const inputType = (typeof input)

  if (inputType === 'string') {
    return getDeepValue(config, input)
  }

  if (inputType === 'object') {
    config = Object.assign(config, input)
  }
}

/**
 * Config creator function
 *
 * @param  {[type]} Vue     [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
export const create = (Vue, options) => {
  config = mergeConfig(options)

  return configure
}
