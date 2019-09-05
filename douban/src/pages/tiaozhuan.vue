<template>
  <div>注册成功{{miao}}秒后跳转至登陆页面</div>
</template>
<script>
export default {
  data() {
    return {
      miao: 5
    };
  },
  mounted() {
    let mytimer = setInterval(() => {
      console.log(this);
      this.miao--;
      if (this.miao <= 0) {
        clearInterval(mytimer);
        this.$router.push("/login");
      }
    }, 1000);
  }
};
</script>

<style scoped>
</style>