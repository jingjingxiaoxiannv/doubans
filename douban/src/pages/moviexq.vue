<template>
  <div class="bigbox">
    <indexnav></indexnav>
    <div class="dakai">
      <img src="../../static/dakai.png" />
    </div>
    <div class="yinp">
      <div class="cotl">
        <h3>哈利波特</h3>
        <el-rate v-model="value" disabled text-color="#ff9900" :score-template="value"></el-rate>
        <span>xxxxxxx人</span>
        <p>详细信息/详细信息/详细信息/详细信息/详细信息/详细信息/详细信息/</p>
      </div>
      <div class="cotr">
        <img src="../../static/dengdai.gif" />
      </div>
    </div>
    <div class="btns">
      <div class="btnl">想看</div>
      <div class="btnl">看过</div>
    </div>
    <div class="jianjie">
      <h4>哈利波特的简介</h4>
      <p>全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，全都是简介，</p>
    </div>
    <div class="fenlei">
      <h4>查看更多相关分类</h4>
      <span>剧情</span>
      <h4>哈利波特的图</h4>
    </div>
    <div class="dytu">
      <dytu></dytu>
    </div>
    <div class="pinglun">
      <h4>哈利波特的短评</h4>
      <dianpl v-for="v in 5 " :key="v"></dianpl>
    </div>
  </div>
</template>
<script>
import indexnav from "../components/indexnav";
import dianpl from "../components/dianyingzj/dianpl";
import dytu from "../components/dianyingzj/dytu";
export default {
  components: {
    indexnav,
    dytu,
    dianpl
  }
};
</script>
<style scoped>
h4 {
  margin: 0.3rem 0;
}
.pinglun {
  width: 3.4rem;
  margin: 0.2rem auto;
}

.dytu {
  width: 3.4rem;
  margin: 0.2rem auto;
}
.fenlei {
  width: 3.4rem;
  margin: 0.2rem auto;
}
.fenlei span {
  display: inline-block;
  width: 0.46rem;
  height: 0.24rem;
  background: gainsboro;
  border-radius: 0.12rem;
  text-align: center;
  line-height: 0.24remm;
  font-size: 0.12rem;
}

.jianjie {
  width: 3.4rem;
  margin: 0 auto;
}
.btns .btnl {
  width: 1.6rem;
  height: 0.3rem;
  color: #ffbf2d;
  border: #ffbf2d 1px solid;
  border-radius: 5px;
  text-align: center;
  line-height: 0.3rem;
  margin: 0.1rem;
}
.btns {
  width: 3.4rem;
  margin: 0.2rem auto;
  display: flex;
}
.cotr img {
  width: 0.93rem;
  height: 1.3rem;
}
.cotl {
  width: 2.62rem;
  position: relative;
}
.cotl p {
  margin-top: 0.2rem;
}
.cotl span {
  position: absolute;
  top: 0.22rem;
  left: 1.5rem;
}
.yinp {
  width: 3.4rem;
  margin: 0.3rem auto;
  display: flex;
}
.bigbox {
  width: 3.75rem;
}
.dakai {
  width: 3.75rem;
  margin-bottom: 0.1rem;
}
.dakai img {
  width: 3.75rem;
}
</style>