# vue-config-manager
> A configuration manager for Vue

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

### Roadmap
- Load configuration asynchronously
- Overriding configuration based on URL

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
