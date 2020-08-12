
const Vue=require("vue")
const Router=require("vue-router")


export const constantRouterMap = [

]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
