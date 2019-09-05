<template>
  <div class="bigbox">
    <indexnav></indexnav>
    <div class="dakai">
      <img src="../../static/dakai.png" />
    </div>
    <div class="tit">
      <tittu :arr="xq"></tittu>
    </div>
    <foottu></foottu>
  </div>
</template>

<script>
import indexnav from "../components/indexnav";
import tittu from "../components/shouyexqs/tittu";
import foottu from "../components/foottu";

export default {
  components: {
    indexnav,
    tittu,
    foottu
  },
  data() {
    return {
      arrs: []
    };
  },
  created() {
    this.axios({
      url: "/shouye",
      method: "get"
    }).then(ok => {
      this.arrs = ok.data;
      console.log(this.arrs);
    });
  },
  computed: {
    xq() {
      var xx = this.arrs.filter((v, i) => {
        if (v.id == this.$route.query.id) {
          return v;
        }
      });
      return xx;
    }
  }
};
</script>

<style scoped>
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
.tit {
  width: 3.75rem;
}
</style>  