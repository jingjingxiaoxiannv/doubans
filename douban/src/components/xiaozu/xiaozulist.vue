<template>
    <div class="listbox">
        <div class="up">
            <img :src="imgurl" >
            <span class="tit">{{dizhi}}</span>
            <span class="renshu">25432 人</span>
        </div>
        <div class="down">
            <p>{{time}} &nbsp;{{mes}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["imgurl","dizhi","mes","time"]
}
</script>
<style scoped>
.down p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .44rem;
}
.tit{
    display: inline-block;
  
    width: 1.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .18rem;
    position: relative;
    top:-.2rem;
    margin-left: .2rem;
    
}
.renshu{
    position: relative;
    top:-.2rem;
    left:;
    color: gainsboro;
}
    .listbox{
        width: 3.32rem;
        margin: .2rem auto;
        border-bottom: 2px solid gainsboro;
    }
    
    .up img{
        width: .48rem;
        
    }
</style>