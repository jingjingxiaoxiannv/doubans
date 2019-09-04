<template>
  <span :style="{ color:col ,borderColor:col}" class="cols">{{tit}}</span>
</template>
<script>
export default {
  props: ["tit", "col"]
};
</script>
<style scoped>
.cols {
  padding: 0.1rem 0.2rem;
  margin: 0.1rem 0.1rem;
  border: 1px solid;
  border-radius: 5px;
  flex-shrink: 0;
}
</style>