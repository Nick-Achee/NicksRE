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
        destination: '/962ae98ef6a94701a0cdaae2ad0a0732?',
        // don't set permanent to true because it will get cached by the browser
        // while developing on localhost
        permanent: false
      }
    ]
  }
})


