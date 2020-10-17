import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Explore = () => import('../views/explore/Explore')
const Message = () => import('../views/message/Message')
const Mine = () => import('../views/mine/Mine')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/explore',
    component: Explore
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/mine',
    component: Mine
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
