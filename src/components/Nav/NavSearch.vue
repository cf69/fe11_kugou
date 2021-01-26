<template>
  <div class="searchCom">
    <mt-header :title="titleData">
      <span slot="left" @click="$router.go(-1)">
          <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
import { mapState } from 'vuex';
Vue.component(Header.name, Header);
export default {
  computed:{
    ...mapState(["titleData"])
  },
  watch:{
    $route(to){
      if(to.path == "/search"){
        this.$store.commit("changeTitle",{title:"搜索"})
      }
    }
  }
  
}
</script>

<style lang="less">
  .searchCom{
    .mint-header{
      background-color: transparent;
      color: #000;
      .mint-button-icon{
        .mintui-back{
        color: #ccc;
        font-size: 1rem;
      }
      }
    }
  }
</style>