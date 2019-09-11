module.exports = {
  input: 'src/index.js',
  bundleNodeModules: true,
  banner: true,
  output: {
    extractCSS: false,
    minify: true,
    sourceMap: false
  },
  plugins: {
    vue: true
  }
}