<template>
  <div class="bigbox">
    <div class="cotbox">



      <div class="tt">
        <img class="dou" src="../../../static/dou.png" />
        <div>
          <h3>
            <span>{{user}}</span> 写了日记
          </h3>
          <p>{{time}}</p>
        </div>
      </div>

    <div class="cont">
        <h3>豆瓣App 4.12.0 主要更新</h3>
        <p>可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
    </div>
    <div class="hudong">
        <div class="zan">
            <div><img src="../../../static/zan.png" @click="add()"> <span>{{num}}</span></div>
            <div><img src="../../../static/mes.png" @click="pl()"> <span>0</span></div>
            <div><img src="../../../static/zhuan.png" @click="zhuan()"> <span>0</span></div>
        </div>
        <div class="dian">
            ···
        </div>
    </div>


    </div>

  </div>
</template>
<script>
export default {

  data() {
    return {
      time: "",
      user: "豆瓣",
      num:0
    };
  },
  created() {
    var times = new Date();
    this.time =
      times.getFullYear() +
      "-" +
      (times.getMonth() + 1) +
      "-" +
      times.getDate() +
      " " +
      times.getHours() +
      ":" +
      times.getMinutes() +
      ":" +
      times.getSeconds();
  },
  methods:{
      add(){
          this.num++
      },
      pl(){
          prompt("输入评论")
      },
    zhuan(){
        alert("点击确认转发")
    }
  }
};
</script>
<style scoped>

.zan{
    width: 1.5rem;
    display: flex;
    justify-content: space-between;
}
.zan img{
    width: .19rem;
    height: .17rem;
}
.hudong{
    width: 2.4rem;
    height: .45rem;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    color: #d8d8d8;
}
.cont{
    margin: .15rem 0;
    padding: .12rem .17rem;
    width: 2.22rem;
    height: 1.24rem;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    position: absolute;
    right: 0;
}
.cont h3{
    line-height: .35rem;
}
.cont p{
    color: #d8d8d8;
}
.tt {
  width: 100%;
  display: flex;
}
.dou {
  width: 0.48rem;
  margin-right: 0.16rem;
  display: block;
}
.bigbox {
  width: 3.09rem;
  padding: 0 0.33rem;
}
.cotbox {
  width: 100%;
  position: relative;
  height: 2.7rem;
  border-bottom: 1px gainsboro solid;
}
h3 {
  font-weight: 100;
}
h3 span {
  font-weight: 600;
}
</style>