'use strict'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      // redirect the index page to our notion test suite
      {
        source: '/',
        destination: '/bcf3c19d64414c0787ae7a5cd0676447',
        // don't set permanent to true because it will get cached by the browser
        // while developing on localhost
        permanent: false
      }
    ]
  }
})


