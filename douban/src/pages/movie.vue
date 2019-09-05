<template>
  <div>
    <indexnav></indexnav>
    <ul>
      <li>
        <p>影院热映</p>
        <span>更多</span>
      </li>
      <div class="bigbox">
        <lunbo
          v-for="(v,i) in yy"
          :key="i"
          :tit="v.title"
          :imgurl="v.images.large"
          :value="v.rating.average/2"
        ></lunbo>
      </div>

      <li>
        <p>免费在线观影</p>
        <span>更多</span>
      </li>
      <div class="bigbox">
        <lunbo v-for="(v,i) in mianfei" :key="i" :tit="v.title" :imgurl="v.images.large"></lunbo>
      </div>

      <li>
        <p>新片速递</p>
        <span>更多</span>
      </li>
      <div class="bigbox">
        <lunbo v-for="(v,i) in newpian" :key="i" :tit="v.title" :imgurl="v.images.large"></lunbo>
      </div>

      <li>
        <p>发现好电影</p>
        <span>更多</span>
      </li>
      <div class="findm">
        <findmov v-for="(v,i) in arr2" :key="i" :col="v.color" :tit="v.title"></findmov>
      </div>
    </ul>
    <h3>分类浏览</h3>
    <div class="fenleibox">
      <fenlei v-for="(v,i) in titles" :key="i" :tit1="v.tit1" :tit2="v.tit2"></fenlei>
    </div>
    <foottu></foottu>
  </div>
</template>

<script>
import indexnav from "../components/indexnav";
import lunbo from "../components/dianying/lunbo";
import findmov from "../components/dianying/findmov";
import fenlei from "../components/dianying/fenlei";
import foottu from "../components/foottu";

export default {
  components: {
    indexnav,
    lunbo,
    findmov,
    fenlei,
    foottu
  },
  data() {
    return {
      arr: [],
      arr2: [],
      titles: [
        { tit1: "经典" },
        { tit1: "豆瓣高分" },
        { tit1: "喜剧" },
        { tit1: "悬疑" },
        { tit1: "科幻" },
        { tit1: "文艺" },
        { tit1: "动画" },
        { tit1: "欧美" },
        { tit1: "日本" },
        { tit1: "冷门佳片" },
        { tit1: "动作" },
        { tit1: "爱情" },
        { tit1: "恐怖" },
        { tit1: "治愈" },
        { tit1: "成长" },
        { tit1: "华语" },
        { tit1: "韩国" }
      ]
    };
  },
  created() {
    this.axios({
      url: "/mov",
      method: "get"
    }).then(
      ok => {
        this.arr = ok.data;
        console.log(this.arr);
      },
      err => {
        console.log("失败");
      }
    );

    this.axios({
      url: "/faxianhaodianying",
      method: "get"
    }).then(
      ok => {
        this.arr2 = ok.data;
        console.log(this.arr2);
      },
      err => {
        console.log("失败");
      }
    );
  },
  computed: {
    yy() {
      var yys = this.arr.filter((v, i) => {
        if (i < 8) {
          return this.arr[i];
        }
      });
      return yys;
    },
    mianfei() {
      var mianfei = this.arr.filter((v, i) => {
        if (i > 7 && i < 16) {
          return this.arr[i];
        }
      });
      return mianfei;
    },
    newpian() {
      var newpian = this.arr.filter((v, i) => {
        if (i > 16 && i < 24) {
          return this.arr[i];
        }
      });
      return newpian;
    }
  }
};
</script>


<style scoped>
.fenleibox {
  width: 3.75rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
}
.findm {
  width: 3.75rem;
  display: flex;
  overflow: auto;
  margin-bottom: 0.2rem;
}
.bigbox {
  width: 3.75rem;
  display: flex;
  margin: 0.2rem 0;
  overflow: auto;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0.19rem 0.2rem;
}
li p {
  font-size: 0.18rem;
}
li span {
  font-size: 0.15rem;
  color: #30b746;
}
h3 {
  margin: 0.2rem;
  font-weight: 100;
}
</style>