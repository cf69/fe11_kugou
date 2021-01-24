import Vue from 'vue'
import VueRouter from 'vue-router'



// 导入四个路由规则
import NavRoutes from "./nav"
import NavSearch from "@/components/Nav/NavSearch"
import Search from "@/components/Search/Search.vue"

Vue.use(VueRouter)

const routes = [
  ...NavRoutes,
  // 搜索路由
  {
    path:"/search",
    name:"Search",
    components:{
      default:Search,
      nav:NavSearch
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
