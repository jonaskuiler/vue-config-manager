# Vue Configuration Manager
> A configuration manager for Vue

<p align="center">
  <img src="http://i.imgur.com/o2edPcD.png" width="320" />
  <br><br>
  <a href="https://www.npmjs.com/package/vue-config-manager">
    <img src="https://img.shields.io/npm/v/vue-config-manager.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/vue-config-manager">
    <img src="https://img.shields.io/npm/dt/vue-config-manager.svg">
  </a>
</p>

### NPM
``` bash
npm install vue-config-manager
```

### Basic usage

This example will add a `debug` variable to the config manager

``` javascript
Vue.use(VueConfigManager, {
  defaults: {
    debug: true,
    api: {
      base: 'http://graph.facebook.com/'
    }
  }
})
```

You can retrieve this variable inside a Vue component

``` javascript
Vue.component('example', {
  mounted () {
    const debug = this.$config('debug')
    const base = this.$config('api.base')
  }
})
```

### Environment specifics

When you need different configuration for a specific environment

``` javascript
Vue.use(VueConfigManager, {
  defaults: {
    debug: true
  },

  environment: {
    debug: false
  }
})
```

However, if you're not running in a server environment you can also get desired configuration based on the hostname of your app.

``` javascript
Vue.use(VueConfigManager, {
  defaults: {
    debug: true
  },

  hosts: {
    'localhost': {
      debug: false
    }
  }
})
```

### Development Setup

``` bash
# install deps
npm install

# build dist files
npm run build

# serve examples at localhost:8080
npm run dev

# run all tests
npm test
```
