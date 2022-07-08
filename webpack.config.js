const path = require('path');

module.exports = {
  resolve: {
    extensions: ['js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Components: path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
}