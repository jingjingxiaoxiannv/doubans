<template>
  <div>
    <indexnav></indexnav>
    <div class="deng">
      <usermes></usermes>
    </div>
    <h3>租房找室友</h3>
    <xiaozubox :arr="arr"></xiaozubox>
    <p class="lv">更多相关小组</p>
    <h3>来聊五块钱</h3>
    <xiaozubox :arr="arr2"></xiaozubox>
    <p class="lv">来聊五块钱</p>
    <h3>买买买</h3>
    <xiaozubox :arr="arr3"></xiaozubox>
    <p class="lv">更多相关小组</p>
    <foottu></foottu>
  </div>
</template>

<script>
import indexnav from "../components/indexnav";
import usermes from "../components/usermes";
import xiaozubox from "../components/xiaozu/xiaozubox";
import foottu from "../components/foottu";

export default {
  components: {
    indexnav,
    usermes,
    xiaozubox,
    foottu
  },
  data() {
    return {
      arr: [],
      arr2: [],
      arr3: []
    };
  },

  created() {
    this.axios({
      url: "/xiaozua",
      method: "get"
    }).then(ok => {
      this.arr = ok.data;
      console.log(this.arr);
    }),
      this.axios({
        url: "/xiaozub",
        method: "get"
      }).then(ok => {
        this.arr2 = ok.data;
        console.log(this.arr);
      }),
      this.axios({
        url: "/xiaozuc",
        method: "get"
      }).then(ok => {
        this.arr3 = ok.data;
        console.log(this.arr);
      });
  }
};
</script>


<style scoped>
.deng {
  margin-bottom: 0.24rem;
}
h3 {
  padding: 0 0.2rem;
}
p {
  text-align: center;
  color: #30b746;
}
.lv {
  margin-bottom: 0.24rem;
}
</style>