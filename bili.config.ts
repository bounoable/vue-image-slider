import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  bundleNodeModules: true,

  output: {
    format: ['umd'],
    moduleName: 'ImageSlider',
    fileName: 'image-slider.umd.js',
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