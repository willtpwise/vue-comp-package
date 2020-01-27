import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js'
  },
  external: ['vue', '@vue/composition-api'],
  plugins: [
    vue()
  ]
}
