<template>
  <div class="bigbox">
    <div class="conbox">
      <router-link to="/login">
        <div class="ubox">
          <div class="ubl">
            <img src="../../static/user.png" />
          </div>
          <div class="ubr">请先登录</div>
        </div>
      </router-link>
      <router-link to="/zhuce">
        <div class="tbox">
          <img src="../../static/001.png" />
          <img src="../../static/2222.png" />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tbox {
  width: 0.87rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tbox img {
  width: 0.29rem;
}
.bigbox {
  width: 3.75rem;
  border-bottom: 2px solid #dedede;
  padding: 0.1rem 0;
}
.conbox {
  width: 3.22rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.ubox {
  width: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ubl img {
  width: 0.48rem;
  border-radius: 50%;
}
.ubr {
  color: #dedede;
}
</style>