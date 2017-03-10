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
  hosts: {},
  defaults: {}
}

/**
 * Determine if the plugin is running in a browser environment
 */
const isBrowser = typeof window !== 'undefined'

/**
 * Utils
 */

/* eslint-disable no-console */
const warn = (...args) => console.warn.apply(null, '[vue-config-manager]:'.concat(args))
/* eslint-enable no-console */

/**
 * Get configuration for the browser's current location
 */
const getHostConfig = (hosts) => {
  if (!isBrowser) {
    return {}
  }

  const key = Object.keys(hosts).find(host => {
    return window.location.hostname.indexOf(host) !== -1
  })

  return (hosts[key] || {})
}

/**
 * Merge options into a flattened config
 *
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
export const mergeConfig = (options) => {
  const { environment, hosts, defaults } = Object.assign(defaultOptions, options)
  const isObject = value => typeof value === 'object'
  const validOptions = [environment, hosts, defaults].some(isObject)

  if (!validOptions) {
    warn('The provided options are incorrect')
    return
  }

  const host = getHostConfig(hosts)

  return Object.assign({}, defaults, host, environment)
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
