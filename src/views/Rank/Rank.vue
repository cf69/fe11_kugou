<template>
  <div>
      <cell-com :list="ranklists"></cell-com>
  </div>
</template>

<script>
import cellCom from "../Common/CellCom"
export default {
  data(){
    return{
      ranklists:[]
    }
  },
  components:{
    cellCom
  },
  async created(){
    let {data}=await this.$axios.get("/api/rank/list?json=true")
    // console.log(data);
    this.ranklists=data.rank.list;
  }
}
</script>

<style>

</style>