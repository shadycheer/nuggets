import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      composables: resolve(__dirname, 'src/composables'),
      models: resolve(__dirname, 'src/models'),
      styles: resolve(__dirname, 'src/styles'),
      plugins: resolve(__dirname, 'src/plugins'),
      views: resolve(__dirname, 'src/views'),
      layouts: resolve(__dirname, 'src/layouts'),
      utils: resolve(__dirname, 'src/utils'),
      services: resolve(__dirname, 'src/services'),
      dirs: resolve(__dirname, 'src/directives')
    }
  },
  server: {
    host: 'drown.cn',
    port: 8000,
    proxy: {
      '/recommend_api': {
        target: 'https://api.juejin.cn',
        secure: true,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace('^/recommend_api', ''),
        // 加上这个玩意儿 否则403 血的教训
        // https://github.com/facebook/create-react-app/issues/5441
        headers: {
          origin: 'https://api.juejin.cn'
        }
      }
    }
  }
})
