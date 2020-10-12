
const Vue=require("vue")
const Router=require("vue-router")

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/farm.enter'
  },
  {
    path: '/farm.enter',
    component:  () => import('farmWap/pages/farm.enter')
  },
  {
    path: '/farm.share',
    component:  () => import('farmWap/pages/farm.share')
  },
  {
    path: '/farm.list',
    component:  () => import('farmWap/pages/farm.list')
  },

  {
    path: '/*',
    redirect: '/',
  }

]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
