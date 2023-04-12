import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTemplateVue from '../views/AddTemplate.vue'

const routes = [
  {
    path:'/',
    name:'add',
    component:AddTemplateVue,
  },
  {
    // path: '/about',
    // name: 'about',
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path:'/',
    redirect:"/add"
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
