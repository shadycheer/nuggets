import {ROUTE_NAMES, ROUTE_PATH} from './constant' // const Layout = () => import('@/layout/layout.vue')

// const Layout = () => import('@/layout/layout.vue')
const Home = () => import('@/views/home/index.vue')
const Post=()=>('@/views/home/Detail.vue')
export default [
  {
    path: ROUTE_PATH.root,
    // component: Layout,
    redirect: () => ROUTE_PATH.home,
    children: [
      {
        path: ROUTE_PATH.home,
        name: ROUTE_NAMES.home,
        component: Home,
        meta:{
          title:'Home主页'
        }
      },

      {
        path:ROUTE_PATH.post,
        name:ROUTE_NAMES.post,
        component:Post,
        meta: {
          title: '文章详情页'
      },
      
      },

    ]
  }
]
