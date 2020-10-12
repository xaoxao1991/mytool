
const Vue=require("vue")
const Router=require("vue-router")


export const constantRouterMap = [
  {
    path: '/',
    component:  () => import('mytoolWeb/pages/nav'),
    redirect: '/software',
    children: [
      {
        path: 'software',
        name: 'software',
        component: () => import('mytoolWeb/pages/software'),
        meta: {title: '常用软件', icon: 'software'}
      },
      {
      path: 'system',
      name: 'system',
      component: () => import('mytoolWeb/pages/system'),
      meta: {title: '操作系统', icon: 'system'}
    },
      {
        path: 'programming',
        name: 'programming',
        component: () => import('mytoolWeb/pages/programming'),
        meta: {title: '开发编程', icon: 'programming'}
      },
      {
        path: 'language',
        name: 'language',
        component: () => import('mytoolWeb/pages/language'),
        meta: {title: '外语学习', icon: 'language'}
      },
      {
        path: 'examination',
        name: 'examination',
        component: () => import('mytoolWeb/pages/examination'),
        meta: {title: '考试', icon: 'examination'}
      },
      {
        path: 'website',
        name: 'website',
        component: () => import('mytoolWeb/pages/website'),
        meta: {title: '网址导航', icon: 'website'}
      },
      {
        path: 'entertainment',
        name: 'entertainment',
        component: () => import('mytoolWeb/pages/entertainment'),
        meta: {title: '娱乐休闲', icon: 'entertainment'}
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
