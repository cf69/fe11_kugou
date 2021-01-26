<template>
  <div>
    <mt-cell :title="item.singername"
    v-for="item in singers"
    :key="item.singerid"
    >
        <img slot="icon" :src="item.imgurl | imgFilter"  width="47" height="47">
    </mt-cell>
  </div>
</template>

<script>

export default {
  data(){
    return{
      singers:[]
    }
  },
  async created(){
      let {data} =await this.$axios.get("/api/singer/list/"+ this.$route.params.singerId +"?json=tue")
      console.log(data); 
      this.singers=data.singers.list.info; 
      this.$store.commit("changeTitle",{title:data.classname})
  }
}
</script>

<style scoped>
  .mint-cell img{
    margin: .5rem;
  }
</style>