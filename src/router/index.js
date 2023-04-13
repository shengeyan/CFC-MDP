import { createRouter, createWebHashHistory } from 'vue-router'
import AddTemplateVue from '../views/AddTemplate.vue'

const routes = [
  {
    path:'/',
    name:'add',
    component:AddTemplateVue,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/HomeView.vue')
  },
  {
    path:'/',
    redirect:"/add"
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
