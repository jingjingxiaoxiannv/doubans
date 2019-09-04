<template>
  <div class="kuai">
    <h3 :style="{color:cols}">{{dt}}</h3>
    <p>{{dd}}</p>
  </div>
</template>
<script>
export default {
  props: ["dt", "dd", "cols"]
};
</script>
<style scoped>
.kuai {
  width: 1.24rem;
  text-align: center;
  padding: 0.2rem 0;
}
h3 {
  font-size: 0.2rm;
}
p {
  color: #b3b3b3;
  font-size: 0.1rem;
}
</style>