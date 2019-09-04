<template>
  <div>
    <div class="top">
      <span @click="tui()">取消</span>
      <h3>登录豆瓣</h3>
    </div>
    <div class="biao">
      <input type="text" placeholder="邮箱" v-model="uname" />

      <input v-model="uesrpass" :type="bool?'text':'password'" placeholder="Token" />

      <b @click="kan()" :class="bool?'red':''">eye</b>
    </div>
    <div class="deng" @click="denglu()">登录</div>
    <p>使用其他方式登录 & 找回密码</p>
    <div class="lar">
      <h4 class="left1" @click="zhu()">注册豆瓣账号</h4>
      <h4 class="right1">下载豆瓣APP</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: false,
      uesrpass: "",
      uname: ""
    };
  },
  methods: {
    tui() {
      this.$router.push("/index");
    },
    kan() {
      this.bool = !this.bool;
    },
    zhu() {
      this.$router.push("/zhuce");
    },
    denglu() {
      var pwd = this.uesrpass;
      var email = this.uname;

      var param = new URLSearchParams();
      param.append("pwd", this.uesrpass);
      param.append("email", this.uname);

      this.axios({
        method: "post",
        url: "http://10.35.162.160:3000/login",
        data: param
      }).then(ok => {
        console.log(ok);
        if (ok.data.linkid == 5) {
          window.localStorage.setItem("uesr", ok.data.token);

          alert("登陆成功，点击“确定”跳转至首页");
          this.$router.push("/index");
        } else if (ok.data.linkid == 4) {
          alert("账号或密码错误请重新登陆");
        }
      });
    }
  }
};
</script>

<style scoped>
h4 {
  margin: 0.5rem 0.15rem;
  color: #27b43e;
}
.lar {
  display: flex;
  justify-content: center;
}
.red {
  color: red;
}
p {
  text-align: center;
  margin-top: 0.44rem;
  color: gainsboro;
}
.deng {
  width: 3.42rem;
  height: 0.47rem;
  margin: 0 auto;
  line-height: 0.47rem;
  background: #27b43e;
  text-align: center;
  border-radius: 3px;
  margin-top: 0.2rem;
  color: white;
}
b {
  position: absolute;
  right: 0.25rem;
  bottom: 0.07rem;
}
.biao {
  width: 100%;
  position: relative;
}
.biao input {
  display: block;
  width: 3.43rem;
  margin: 0.02rem auto;
  height: 0.3rem;
  outline: none;
  border: 1px gainsboro solid;
  border-radius: 3px;
  font-size: 0.18rem;
  text-indent: 0.08rem;
}
.top {
  width: 3.75;
  height: 0.5rem;
  border-bottom: 1px gainsboro solid;
  margin-bottom: 0.32rem;
}
span {
  float: left;
  margin: 0.14rem 0.19rem;
  color: #27b43e;
}
h3 {
  float: left;
  margin: 0.12rem 0.8rem;
}
</style>