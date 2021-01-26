<template>
  <div class="songDetails">
    <div class="header">
      <img :src="songData.imgUrl" alt="" >
      <div class="mark"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      songData:{

      }
    }
  },
  // 这个一个公用的组件
  // 如果是通过排行榜进入的 rank/info/8888?json=true
  // 歌单进入 plist/list/3272293?json=true
  async created(){
    console.log(this.$route.params);
    // 根据路径的不同来做axios请求
    let {songName,songId}=this.$route.params;
    let url=""
    if(songName == "rank"){
      url="/api/rank/info/"+songId+'?json=true'

      let {data} =await this.$axios.get(url)
      console.log(data);

      // 把数据处理一下 给songData
      this.songData={
        imgUrl:data.info.imgurl.replace(/{size}/,'400'),
        titleName:data.info.rankname,
        updateTime:data.songs.list[0].addtime
      }
      this.songData.songs=data.songs.list.map(item=>{
        return {
          filename:item.filename,
          hash:item.hash
        }
      })
    }else if(songName == "plist"){
      url="/api/plist/list/"+songId+'?json=true'

      let {data} =await this.$axios.get(url)
      console.log(data);

      // 把数据处理一下 给songData
      this.songData={
        imgUrl:data.info.list.imgurl.replace(/{size}/,'400'),
        titleName:data.info.list.specialname,
        updateTime:data.info.list.publishtime
      }
      this.songData.songs=data.list.list.info.map(item=>{
        return {
          filename:item.filename,
          hash:item.hash
        }
      })
    }
    

    

    // 提交修改标题
    this.$store.commit("changeTitle",{title:this.songData.titleName})
  }
}
</script>

<style lang="less">
  .songDetails{
    .header{
      background-color: rgb(68,145,239);
      position: absolute;
      left: 0;
      top: 40px;
      width: 100%;
      height: 8.6rem;
      text-align: center;
      .mark{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(
          to bottom,
          rgba(0,0,0,.4) 0%,
          rgba(0,0,0,.1) 20%,
          rgba(0,0,0,0) 50%,
          rgba(0,0,0,.1) 80%,
          rgba(0,0,0,.4) 100%,
        );
      }
      img{
      width: 100%;
      height: 8.6rem;
      }
    }
    
  }

</style>