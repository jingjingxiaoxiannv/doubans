<template>
  <div class="tubox">
    <div class="imgs">
      <img :src="imgurl" />
    </div>

    <p>{{tit}}</p>
    <p class="xing">
      <el-rate v-model="value" disabled text-color="#ff9900" :score-template="{value}"></el-rate>
      <span>评分</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4.7
    };
  },
  props: ["tit", "imgurl", "pingfen"],
  methods: {}
};
</script>
<style scoped>
.bigBox {
  display: flex;
}
.tubox {
  width: 1rem;
  height: 2arem;
  margin: 0.1rem;
  text-align: center;
}
.tubox img {
  width: 1rem;
  display: block;
}
.imgs {
  width: 1rem;
  height: 1.5rem;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.xing {
  color: yellow;
}
p span {
  font-size: 0.12rem;
  color: #aaaaaa;
}
</style>