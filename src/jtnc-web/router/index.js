
const Vue=require("vue")
const Router=require("vue-router")


export const constantRouterMap = [
  {
    path: '/',
    component:  () => import('jtncWeb/pages/nav'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('jtncWeb/pages/index'),
        meta: {title: '首页', icon: 'index'}
      },
      {
        path: 'farm.list',
        name: 'index',
        component: () => import('jtncWeb/pages/farm.list'),
        meta: {title: '农场秀', icon: 'index'}
      },

      {
        path: 'cooperation.contact',
        name: 'index',
        component: () => import('jtncWeb/pages/cooperation.contact'),
        meta: {title: '农场秀', icon: 'index'}
      },

      {
        path: 'add.us',
        name: 'index',
        component: () => import('jtncWeb/pages/add.us'),
        meta: {title: '农场秀', icon: 'index'}
      },
      {
        path: 'user.login',
        name: 'index',
        component: () => import('jtncWeb/pages/user.login'),
        meta: {title: '农场秀', icon: 'index'}
      },




    ]
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
