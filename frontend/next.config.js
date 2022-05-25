const withImages = require('next-images')

const images = withImages({
  esModule: true
})

module.exports = {
    images,
    eslint: {
        ignoreDuringBuilds: true
    }
}
