<template>
  <div>
    <div class="logo">
      <img class="logo" src="../../static/welcome.png" />
    </div>
    <div class="kuang">
      <input type="text" placeholder="邮箱" v-model="umes" />
      <input type="text" placeholder="密码" v-model="uname" />
      <input type="text" placeholder="用户名" v-model="umima" />
      <br />
    </div>
    <div class="btn" @click="zhuce()">立即注册</div>
    <p>点击[注册]代表你已经阅读并同意用户使用协议</p>
    <h4>下载豆瓣App</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      umes: "",
      uname: "",
      umima: ""
    };
  },
  methods: {
    zhuce() {
      var email = this.umes;
      var pwd = this.uname;
      var uname = this.umima;
      var param = new URLSearchParams();
      param.append("email", this.umes);
      param.append("pwd", this.uname);
      param.append("uname", this.umima);
      this.axios({
        method: "post",
        url: "http://10.35.162.160:3000/post",
        data: param
      }).then(ok => {
        console.log("注册成功");
        this.$router.push("/tiaozhuan");
      });
    }
  }
};
</script>

<style scoped>
.logo {
  width: 3.75rem;
  margin-top: 0.2rem;
  margin-bottom: 0.35rem;
}
input {
  display: block;
  width: 3.43rem;
  height: 0.45rem;
  margin: 0.01rem auto;
  border: 1px #c4c4c4 solid;
  border-radius: 3px;
  outline: none;
  font-size: 0.2rem;
  text-indent: 0.1rem;
}
.btn {
  width: 3.75rem;
}
.btn {
  text-align: center;
  line-height: 0.45rem;
  width: 3.43rem;
  height: 0.45rem;
  margin: 0 auto;
  background: #42bd56;
  color: white;
}
p {
  color: #c4c4c4;
  text-align: center;
  font-size: 0.14rem;
  margin-top: 0.2rem;
}
h4 {
  margin-top: 0.3rem;
  font-weight: 100;
  text-align: center;
  color: #42bd56;
}
</style>