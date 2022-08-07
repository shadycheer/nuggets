import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      composables: path.resolve(__dirname, 'src/composables'),
      models: path.resolve(__dirname, 'src/models'),
      styles: path.resolve(__dirname, 'src/styles'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      views: path.resolve(__dirname, 'src/views'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      utils: path.resolve(__dirname, 'src/utils'),
      services: path.resolve(__dirname, 'src/services'),
      dirs: path.resolve(__dirname, 'src/directives')
    }
  },
  plugins: [vue()]
})
