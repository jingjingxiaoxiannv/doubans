<template>
  <div>
    <headers></headers>
    <div class="navbox">
      <navkuai v-for="(v,i) in box" :key="i" :cols="v.col" :dt="v.tit" :dd="v.jieshi"></navkuai>
    </div>
    <div class="foot">
      <router-link to="/zhuce">注册账号</router-link>
      <router-link to="/login">登录豆瓣</router-link>
    </div>
    <div class="foot">
      <router-link to>使用桌面版</router-link>
      <router-link to>使用豆瓣App</router-link>
    </div>
  </div>
</template>

<script>
import headers from "../components/gengduo/header";
import navkuai from "../components/gengduo/navkuai";

export default {
  components: {
    headers,
    navkuai
  },
  data() {
    return {
      box: [
        { tit: "电影", jieshi: "影院热映", col: "#0e78e6" },
        { tit: "电视", jieshi: "正在热播", col: "#6b59d6" },
        { tit: "图书", jieshi: "畅销排行", col: "#966b51" },
        { tit: "同城", jieshi: "周末活动", col: "#e6467e" },
        { tit: "小组", jieshi: "志趣相投", col: "#2cb9cd" },
        { tit: "音乐", jieshi: "新碟榜", col: "#f27f0f" },
        { tit: "阅读", jieshi: "电子书", col: "#9d755c" },
        { tit: "游戏", jieshi: "虚拟世界", col: "#5270c3" },
        { tit: "应用", jieshi: "玩手机", col: "#4c61da" },
        { tit: "东西", jieshi: "心爱之物", col: "#df5b43" },
        { tit: "FM", jieshi: "红心歌单", col: "#2fcaa1" },
        { tit: "市集", jieshi: "购买原创", col: "#33b849" }
      ]
    };
  }
};
</script>


<style scoped>
.navbox {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid gainsboro;
}
.foot {
  text-align: center;
  padding: 0.15rem 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gainsboro;
}
.foot > a {
  color: #30b746;
  text-align: center;
}
</style>