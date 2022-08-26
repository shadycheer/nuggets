import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { injectElementComponents } from '@/plugins/element'

const app = createApp(App)

app.use(router).mount('#app')
injectElementComponents(app)
