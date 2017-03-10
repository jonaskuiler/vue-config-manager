import { expect } from 'chai'
import { configure, mergeConfig, getDeepValue } from '../../src/config-manager'

describe('Config manager', () => {
  const mock = {
    services: {
      facebook: {
        base: 'http://graph.facebook.com/',
        appId: 987654321
      },
      api: {
        base: 'http://vue-config-manager.com/api'
      }
    }
  }

  it('Should be able to get a deeply nested value', () => {
    const base = getDeepValue(mock, 'services.facebook.base')
    const nonExisting = getDeepValue(mock, 'services.google.base')

    expect(base).to.equal('http://graph.facebook.com/')
    expect(nonExisting).to.equal(undefined)
  })

  it('Should be able to merge a config', () => {
    const environmentApi = 'http://staging.vue-config-manager.com/api'
    const localApi = 'http://vue-config-manager.com/api'

    const options = {
      environment: {
        api: environmentApi
      },
      local: {
        api: localApi
      }
    }

    const config = mergeConfig(options)

    expect(config.api).to.equal(localApi)
  })
})
