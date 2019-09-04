<template>
  <div class="navbox">
    <div>
      <router-link to="/index">
        <h2>豆瓣</h2>
      </router-link>
    </div>

    <div class="navright">
      <router-link to="/movie">
        <span class="b">电影</span>
      </router-link>
      <router-link to="/guangbo">
        <span class="z">广播</span>
      </router-link>
      <router-link to="/xiaozu">
        <span class="h">小组</span>
      </router-link>
      <router-link to="/book">
        <span class="l">图书</span>
      </router-link>
      <router-link to="/gengduo">
        <span>
          <img src="../../static/more1.png" />
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbox {
  width: 3.51rem;
  padding: 0.09rem 0.12rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
}
h2 {
  color: #05b512;
  font-size: 0.32rem;
}
.b {
  color: #2384e8;
}
.z {
  color: #9f7860;
}
.h {
  color: #e4a813;
}
.l {
  color: #2ab8cc;
}
span {
  font-size: 0.18rem;
  margin: 0 0.04rem;
}
span img {
  width: 0.34rem;
  position: relative;
  top: 0.12rem;
}
</style>