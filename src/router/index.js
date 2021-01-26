import Vue from 'vue'
import VueRouter from 'vue-router'



// 导入四个路由规则
import NavRoutes from "./nav"
import NavSearch from "@/components/Nav/NavSearch"
import Search from "@/components/Search/Search.vue"
import SingerList from "@/views/Singer/SingerList.vue"
import SongDetails from "@/views/Common/SongDetails.vue"

Vue.use(VueRouter)
// 解决路由重复点击的报错 vue-router的bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

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
  },
  // 歌手列表组件路由规则
  {
    path:"/singer/list/:singerId",
    name:"SingerList",
    components:{
      default:SingerList,
      nav:NavSearch
    }
  },
  // 歌曲详情组件路由规则 "/somg/details"
  {
    path:"/song/details/:songName/:songId",
    name:"SongDetails",
    components:{
      default:SongDetails,
      nav:NavSearch
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
