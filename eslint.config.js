import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  astro: true,
  formatters: {
    astro: true,
    css: true,
  },
})
