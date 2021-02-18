const path = require("path")

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withSass = require("@zeit/next-sass")

const isProduction = process.env.NODE_ENV === "production"

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
  basePath: isProduction ? '/curriculum-vitae' : '',
  assetPrefix: isProduction ? '/curriculum-vitae' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  }
})