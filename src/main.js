import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus'  //element 引入
import 'element-plus/dist/index.css'    //element 样式
import router from './router'   //路由
import store from './store' //数据管理
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//图标引入

const app=createApp(App)

app.use(ElementPlus).use(store).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}