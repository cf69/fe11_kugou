<template>
  <div class="singer">
    <mt-cell :title="item.classname"
    v-for="(item,i) in singerlists"
    :class="{margin1:!styleFn(item.classname,i),margin2:styleFn(item.classname,i)}"
    @touchstart.native="goToSingerFn(item.classid)"
    :key="item.classid">
        <span><img src="../../assets/img/arrow_icon.png" width="8" ></span>
    </mt-cell>
  </div>
</template>

<script>
// import Vue from "vue";
// import { Cell } from 'mint-ui';
// Vue.component(Cell.name, Cell);
export default {
  data(){
    return {
      singerlists:[]
    }
  },
  async created(){
    let {data}=await this.$axios.get("/api/singer/class?json=true")
    console.log(data);
    this.singerlists=data.list
  },
  methods:{
    styleFn(name,i){
      if(i>0&&this.singerlists[i-1].classname.includes(name.substring(0,2))){
        return true;
      }else{
        return false;
      }
    },
    goToSingerFn(id){
      this.$router.push({name:"SingerList",params:{singerId:id}})
    }
  }
}
</script>

<style lang="less">
  .singer{
    .mint-cell{
      border: 1px solid rgb(218, 217, 217);
        background-color: #f1f1f1;
        border-radius: .3125rem;
        margin: .5rem;
        width: 15rem;
    }
    .margin1{
        margin: .5rem .5rem 0rem;
      }
    .margin2{
        margin: 0rem .5rem;
        border-top: none;
      }
  }
</style>