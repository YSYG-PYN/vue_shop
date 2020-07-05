import Vue from 'vue'
import VueRouter from 'vue-router'

// import login from '../components/login'
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/login')
// import Home from '../components/home'
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/home')
// import Welcome from '../components/welcome'
const Welcome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/welcome')

// import Users from '../components/user/Users'
const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users')
// import Rights from '../components/power/Rights'
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights')
// import Roles from '../components/power/Roles'
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles')

// import Cate from '../components/goods/Cate'
const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate')
// import Params from '../components/goods/Params'
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params')

// import GoodsList from '../components/goods/List'
const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/List')
// import Add from '../components/goods/add'
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/add')

// import Order from '../components/order/order'
const Order = () => import(/* webpackChunkName: "Order_Report" */ '../components/order/order')
// import Report from '../components/report/report'
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/report/report')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: GoodsList
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径条状而来
  // next 是一个函数，表示放行
  // next() 放行 next('/login') 强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
