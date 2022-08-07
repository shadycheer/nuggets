import {ROUTE_NAMES, ROUTE_PATH} from './constant' // const Layout = () => import('@/layout/layout.vue')

// const Layout = () => import('@/layout/layout.vue')
const Home = () => import('@/views/home/index.vue')

export default [
  {
    path: ROUTE_PATH.root,
    // component: Layout,
    redirect: () => ROUTE_PATH.home,
    children: [
      {
        path: ROUTE_PATH.home,
        name: ROUTE_NAMES.home,
        component: Home
      }
    ]
  }
]
