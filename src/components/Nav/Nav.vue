<template>
  <div class="nav">
      <mt-navbar v-model="selected">
        <mt-tab-item :id="item.path"
        v-for="(item,i) in NavRoutes"
        :key="i"
        @touchstart.native="gotoCom(item.name)"
        >{{item.meta.title}}</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import NavRoutes from "@/router/nav.js"
// import { mapState  } from "vuex";

export default {
  // computed:{
  //   ...mapState(["selected"])
  // },
  data(){
    return{
      selected:this.$route.path,
      NavRoutes
    }
  },
  methods:{
    gotoCom(name){
      // api发起跳转 是什么路由名称就相应的跳转什么位置
      this.$router.push({name,})
    }
  }
}
</script>

<style>

</style>