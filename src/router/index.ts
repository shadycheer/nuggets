import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import mainRoutes from './home'

const routes: RouteRecordRaw[] = [...mainRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
