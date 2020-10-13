
const Vue=require("vue")
const Router=require("vue-router")


export const constantRouterMap = [
  {
    path: '/',
    component:  () => import('mytoolWeb/pages/nav'),
    meta: {title: '导航页', icon: 'entertainment'}
  },

  {
    path: '/language',
    component:  () => import('mytoolWeb/pages/language/language'),
    meta: {title: 'learn language', icon: 'entertainment'}
  },




  {
    path: '/markdown',
    component:  () => import('mytoolWeb/pages/mark.down'),
    meta: {title: '文本转换器', icon: 'entertainment'}
  },


  {
    path: '/novel',
    component:  () => import('mytoolWeb/pages/novel'),
    children: [
      {
        path: '/',
        redirect: 'rich.dad.or.pool.dad',
      },
      {
        path: 'rich.dad.or.pool.dad',
        name: 'rich.dad.or.pool.dad',
        component: () => import('mytoolWeb/pages/novel/rich.dad.or.pool.dad'),
        meta: {title: 'rich.dad.or.pool.da', icon: 'entertainment'}
      }
    ],
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
