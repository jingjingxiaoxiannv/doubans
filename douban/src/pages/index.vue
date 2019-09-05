<template>
  <div>
    <indexnav></indexnav>
    <div class="fangNav">
      <fangkuainav v-for="(v,i) in obj" :key="i" :titx="v.tit" :urls="v.url" class="fangkuai"></fangkuainav>
    </div>

    <div class="btkbox">
      <img class="gift" src="../../static/dengdai.gif" v-if="arrs.length<=0" />
      <br />
      <bitiku
        v-for="(v,i) in arrs"
        :key="i"
        :tit1="v.title"
        :txt1="con[i]"
        :imgurl="v.image"
        :names="v.category_name"
        :i="v.id"
      ></bitiku>
    </div>
  </div>
</template>

<script>
import indexnav from "../components/indexnav";
import fangkuainav from "../components/indexzj/fangkuainav";
import bitiku from "../components/indexzj/bitiku";

export default {
  components: {
    indexnav,
    fangkuainav,
    bitiku
  },
  data() {
    return {
      obj: [
        { tit: "影院热映", url: "/movie" },
        { tit: "欧美新碟榜", url: "/guangbo" },
        { tit: "注册账号", url: "/zhuce" },
        { tit: "登录豆瓣", url: "/login" }
      ],
      arrs: []
    };
  },
  created() {
    this.axios({
      url: "/shouye",
      method: "get"
    }).then(ok => {
      this.arrs = ok.data;
      console.log(this.arrs);
    });
  },
  computed: {
    con() {
      var cons = [];
      for (var i in this.arrs) {
        cons.push(this.arrs[i].content.slice(0, 25));
      }
      return cons;
    }
  }
};
</script>
<style scoped>
.gift {
  margin: 0 auto;
  position: relative;
  left: 1.25rem;
}
.fangkuai {
  height: 0.4rem;
  width: 1.15rem;
  text-align: center;
  background: #f6f6f6;
  font-size: 0.16rem;
  margin: 0.05rem;
}
.fangNav {
  padding: 0.16rem 0.6rem;
  width: 2.55rem;
  display: flex;
  flex-wrap: wrap;
}
.btkbox {
  width: 3.35rem;
  padding: 0 0.2rem;
}
</style>