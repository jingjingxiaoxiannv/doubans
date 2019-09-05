<template>
  <div>
    <div class="bigbox">
      <h3>
        {{arr[0].title}}
        <span class="di">{{arr[0].loc_name}}</span>
      </h3>

      <img :src="arr[0].image" />
      <br />
      <div class="tiaoj">
        <p class="p1">时间</p>
        <p>
          {{arr[0].begin_time}}
          <br />
          {{arr[0].end_time}}
        </p>
      </div>
      <div class="tiaoj">
        <p class="p1">地点</p>
        <p>{{arr[0].address}}</p>
      </div>
      <div class="tiaoj">
        <p class="p1">费用</p>
        <p>{{arr[0].fee_str}}</p>
      </div>
      <div class="tiaoj">
        <p class="p1">类型</p>
        <p>{{arr[0].category_name}}</p>
      </div>
      <div class="tiaoj">
        <p class="p1">起始时间</p>
        <p>{{arr[0].time_str}}</p>
      </div>

      <h2>活动详情</h2>
      <div class="cont" v-html="arr[0].content"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["arr"]
};
</script>
<style scoped>
.cont {
  text-align: left;
  word-break: break-word;
  padding: 0.2rem;
}
h2 {
  color: #007722;
  text-align: left;
  padding: 0.2rem;
}
.tiaoj {
  text-align: left;
  display: flex;
  width: 3.75rem;
  margin: 0.1rem 0;
}
.tiaoj p {
  padding: 0 0.2rem;
}
.p1 {
  width: 0.45rem;
  font-size: 0.16rem;
  color: #575757;
  white-space: nowrap;
}
.di {
  display: inline-block;
  width: 0.38rem;
  height: 0.25rem;
  background: #ff8263;
  border-radius: 5px;
  font-size: 0.12rem;
  text-align: center;
  color: white;
  line-height: 0.23rem;
}
.bigbox {
  width: 3.75rem;
  text-align: center;
  margin-top: 0.24rem;
}
h3 {
  margin: 0 0.2rem;
  text-align: left;
}
img {
  width: 2.76rem;
  height: 3.86rem;
  margin-top: 0.29rem;
  margin-bottom: 0.27rem;
}
</style>