# vue-config-manager
> A configuration manager for Vue

### NPM
``` bash
npm install vue-config-manager
```

### Basic usage

This example will add a `debug` variable to the config manager

``` jasvascript
Vue.use(VueConfigManager, {
  defaults: {
    debug: true
  }
})
```

You can fetch it inside a Vue component by calling `const debug = this.$config('debug')`

### Environment specifics

When you need different configuration for a specific environment

``` jasvascript
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
