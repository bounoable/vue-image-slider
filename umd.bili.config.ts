import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  bundleNodeModules: true,

  output: {
    format: ['umd', 'umd-min'],
    moduleName: 'ImageSlider',
    fileName(ctx, defaultName) {
      return 'image-slider[min].[format].js'
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
    'vue': 'window.Vue',
    '@vue/composition-api': 'window.compositionApi',
  },
}

export default config
