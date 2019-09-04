<template>
  <div class="left1">
    <p>
      {{tit1}}
      <span>&gt;</span>
    </p>
  </div>
</template>
<script>
export default {
  props: ["tit1", "tit2"]
};
</script>
<style scoped>
.bigbox {
  width: 3.75rem;
}
p {
  color: #30b746;
}
.left1 {
  width: 1.67rem;
  padding: 0.1rem;
  border-top: 1px solid gainsboro;
}

span {
  float: right;
  color: gainsboro;
}
</style>