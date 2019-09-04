<template>
  <div>
    <indexnav></indexnav>
    <div class="deng">
      <usermes></usermes>
    </div>
    <h3>租房找室友</h3>
    <xiaozubox :arr="arr"></xiaozubox>
    <p class="lv">更多相关小组</p>
  </div>
</template>

<script>
import indexnav from "../components/indexnav";
import usermes from "../components/usermes";
import xiaozubox from "../components/xiaozu/xiaozubox";


export default {
  components: {
    indexnav,
    usermes,
    xiaozubox
  },
  data(){
    return {
      arr:[]
    }
  },

  created() {
    this.axios({
      url:"/xiaozua",
      method:"get"
    }).then((ok)=>{
      this.arr=ok.data;
      console.log(this.arr);
    })
  }
};
</script>


<style scoped>
.deng {
  margin-bottom: 0.24rem;
}
h3{
  padding: 0 .2rem
}
p{
  text-align: center;
  color: #30b746;
}
</style>