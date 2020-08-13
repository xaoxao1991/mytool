
const Vue=require("vue")
const Router=require("vue-router")


export const constantRouterMap = [
  {
    path: '/',
    component:  () => import('userWeb/pages/nav'),
    redirect: '/software',
    children: [
      {
        path: 'software',
        name: 'software',
        component: () => import('userWeb/pages/software'),
        meta: {title: '首页', icon: 'software'}
      },
      {
      path: 'system',
      name: 'system',
      component: () => import('userWeb/pages/system'),
      meta: {title: '首页', icon: 'system'}
    },
      {
        path: 'programming',
        name: 'programming',
        component: () => import('userWeb/pages/programming'),
        meta: {title: '首页', icon: 'programming'}
      },
      {
        path: 'language',
        name: 'language',
        component: () => import('userWeb/pages/language'),
        meta: {title: '首页', icon: 'language'}
      },
      {
        path: 'examination',
        name: 'examination',
        component: () => import('userWeb/pages/examination'),
        meta: {title: '首页', icon: 'examination'}
      },
      {
        path: 'website',
        name: 'website',
        component: () => import('userWeb/pages/website'),
        meta: {title: '首页', icon: 'website'}
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
