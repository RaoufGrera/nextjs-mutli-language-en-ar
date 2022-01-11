const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n,
    webpack: (config, { isServer }) => {
      if (!isServer) {
          // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false,
              path: false
          }
      }

      return config;
  }
}
