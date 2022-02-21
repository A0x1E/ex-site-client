import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetWind } from 'unocss'

const config: UserConfig = {
  plugins: [vue(), Unocss({ presets: [presetWind()] })]
}

export default config
