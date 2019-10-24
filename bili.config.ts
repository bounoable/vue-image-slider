import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  bundleNodeModules: true,

  output: {
    format: ['umd', 'umd-min', 'esm', 'cjs'],
    moduleName: 'ImageSlider',
    fileName(ctx, defaultName) {
      if (ctx.format.indexOf('umd') > -1) {
        return 'image-slider[min].[format].js'
      }

      return defaultName
    },
    extractCSS: false,
  },

  plugins: {
    vue: true,
    typescript2: true,
  },

  babel: {
    configFile: false,
  },

  globals: {
    'vue': 'Vue',
    '@vue/composition-api': 'compositionApi',
  },
}

export default config