import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import('../pages/index/index')
const login = () => import('../pages/login/login')
const home = () => import('../pages/home/home')
const menu = () => import('../pages/menu/menu')
const manage = () => import('../pages/manage/manage')
const vip = () => import('../pages/vip/vip')
const goods = () => import('../pages/goods/goods')
const seckill = () => import('../pages/seckill/seckill')
const Classification = () => import('../pages/Classification/Classification')
const role = () => import('../pages/role/role')
const banner = () => import('../pages/banner/banner')
const specs = () => import('../pages/specs/specs')

export const indexRouter = [
  {
    path: 'menu',
    component: menu,
    name: '菜单管理'
  },
  {
    path: 'manage',
    component: manage,
    name: '管理员管理'
  },
  {
    path: 'specs',
    component: specs,
    name: '商品规格'
  },
  {
    path: 'vip',
    component: vip,
    name: '会员管理'
  },
  {
    path: 'goods',
    component: goods,
    name: '商品管理'
  },
  {
    path: 'seckill',
    component: seckill,
    name: '秒杀活动'
  },
  {
    path: 'Classification',
    component: Classification,
    name: '商品分类'
  },
  {
    path: 'role',
    component: role,
    name: '角色管理'
  },
  {
    path: 'banner',
    component: banner,
    name: '轮播图管理'
  },
]

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path:'',
          component: home
        },
        ...indexRouter
      ]
    },
    {
      path: '/',
      component: login,
    },
    {
      path: '*',
      redirect: login,
    }
  ]
})
