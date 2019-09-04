<template>
  <div>
    <indexnav></indexnav>
    <div class="dakai">
      <img src="../../static/dakai.png" />
    </div>
    <div class="deng">
      <usermes></usermes>
    </div>
    <div>
      <pinglun  v-for="v in 7 " :key="v"></pinglun>
    </div>
  </div>
</template>

<script>
import indexnav from "../components/indexnav";
import usermes from "../components/usermes";
import pinglun from "../components/guangbo/pinglun";

export default {
  components: {
    indexnav,
    usermes,
    pinglun
  }
};
</script>


<style scoped>
.deng {
  margin-bottom: 0.24rem;
}
.dakai {
  width: 3.75rem;
  margin-bottom: 0.1rem;
}
.dakai img {
  width: 3.75rem;
}
</style>