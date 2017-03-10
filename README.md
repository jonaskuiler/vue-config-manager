# vue-config-manager
> Configuration manager for Vue

### Installation
* Run `yarn add vue-config-manager` or `npm install --save vue-config-manager`
* Import the plugin in the entry point of your app `import VueConfigManager from 'vue-config-manager'`

### Configuration

This basic example will add a `debug` variable to the config manager

```
Vue.use(VueConfigManager, {
  defaults: {
    debug: true
  }
})
```

You can fetch it inside a Vue component by calling `const debug = this.$config('debug')`

### Environment specifics

When you need different configuration for an environment you can override it by adding an `environment` property to the plugin options.
The environment is responsible for providing these variables because you don't want your build/distribution script to determine these variables.
This way you can drop your build anywhere you want and the plugin will manage the environment variables you put in the options object.

```
Vue.use(VueConfigManager, {
  defaults: {
    debug: true
  },

  enviromnent: {
    debug: false
  }
})
```
