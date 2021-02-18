const path = require("path")

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withSass = require("@zeit/next-sass")

module.exports = withPlugins([
  [withSass, {
    cssModules: true
  }],
  [withImages, {
    webpack(config, options) {
      return config
    }
  }]
], {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  }
})

module.exports = {
  basePath: '/curriculum-vitae',
  assetPrefix: '/curriculum-vitae'
}