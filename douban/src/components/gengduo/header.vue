<template>
  <div class="headerbox">
    <span @click="hui()">取消</span>
    <input @focus="xuan()" @blur="xuan()" :class="bool?'txt2':'txt'" type="text" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      bool: false
    };
  },
  methods: {
    hui() {
      this.$router.go(-1);
    },
    xuan() {
      this.bool = !this.bool;
    }
  }
};
</script>
<style scoped>
.headerbox {
  width: 3.75rem;
  height: 0.54rem;
  text-align: center;
  border-bottom: 1px solid gainsboro;
}
span {
  line-height: 0.54rem;
  color: #48bf5b;
}
.txt {
  width: 2.95rem;
  height: 0.35rem;
  background: url(../../../static/sousuo.png) #f3f3f3 no-repeat center center;
  background-size: 0.2rem;
  border-radius: 3px;
  border: none;
  font-size: 0.2rem;
  text-indent: 0.1rem;
}
.txt2 {
  width: 2.95rem;
  height: 0.35rem;
  background: #f3f3f3 no-repeat center center;
  background-size: 0.2rem;
  border-radius: 3px;
  border: none;
  font-size: 0.2rem;
  text-indent: 0.1rem;
}
</style>