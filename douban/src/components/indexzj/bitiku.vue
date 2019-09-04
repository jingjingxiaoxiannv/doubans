<template>
  <div class="neiro">
    <div class="left1">
      <h3>{{tit1}}</h3>
      <p>{{txt1}}</p>

      <p class="bt">{{names}}</p>
    </div>
    <div class="right1">
      <img :src="imgurl" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["tit1", "txt1", "imgurl", "names"]
};
</script>
<style scoped>
.neiro {
  width: 3.35rem;
  height: 1.3rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.left1 {
  width: 2.24rem;
  position: relative;
}
.left1 h3 {
  font-size: 0.18rem;
  font-weight: 100;
  margin-bottom: 0.16rem;
}
.left1 p {
  font-size: 0.14rem;
  color: gainsboro;
}
.right1 img {
  width: 0.87rem;
}
.bt {
  position: absolute;
  left: 0rem;
  bottom: -0.1rem;
}
</style>