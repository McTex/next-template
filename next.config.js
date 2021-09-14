/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
const { resolve } = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withTM = require('next-transpile-modules')([
  'recoil',
])
const isProd = process.env.staging === 'prod'

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    config.resolve.alias['@public'] = resolve(__dirname, 'public/assets/img')
    return config
  },
  trailingSlash: true,
}

module.exports = withPlugins(
  [
    [withTM, {}],
    [optimizedImages, {}],
  ],
  nextConfig
)
