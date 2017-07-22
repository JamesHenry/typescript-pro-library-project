const sourceMaps = require('rollup-plugin-sourcemaps')
const packageJSON = require('./package.json')

export default {
  entry: `dist/index.js`,
  targets: [
    { dest: packageJSON.main, moduleName: 'typescriptProLibraryProject', format: 'umd' },
  ],
  sourceMap: true,
  plugins: [
    sourceMaps()
  ]
}