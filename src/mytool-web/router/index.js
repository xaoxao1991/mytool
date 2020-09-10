
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
        meta: {title: '首页', icon: 'software'}
      },
      {
      path: 'system',
      name: 'system',
      component: () => import('mytoolWeb/pages/system'),
      meta: {title: '首页', icon: 'system'}
    },
      {
        path: 'programming',
        name: 'programming',
        component: () => import('mytoolWeb/pages/programming'),
        meta: {title: '首页', icon: 'programming'}
      },
      {
        path: 'language',
        name: 'language',
        component: () => import('mytoolWeb/pages/language'),
        meta: {title: '首页', icon: 'language'}
      },
      {
        path: 'examination',
        name: 'examination',
        component: () => import('mytoolWeb/pages/examination'),
        meta: {title: '首页', icon: 'examination'}
      },
      {
        path: 'website',
        name: 'website',
        component: () => import('mytoolWeb/pages/website'),
        meta: {title: '首页', icon: 'website'}
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
