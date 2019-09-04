<template>
  <div>
    <div>
      <router-link :to="urls">
        <p>{{titx}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titx", "urls"]
};
</script>
<style scoped>
p {
  line-height: 0.4rem;
  color: black;
}
</style>