<template>
    <div class="bigbox">
        <xiaozulist v-for="(v,i) in arr" :key="i" :imgurl="v.images.small" :dizhi="v.title" :mes="v.group_topic.title" :time="v.group_topic.time"></xiaozulist>
    </div>
</template>

<script>
import xiaozulist from "../xiaozu/xiaozulist";


export default {
    components:{
        xiaozulist
    },
    props:["arr"]
}
</script>

<style scoped>
    .bigbox{
        width: 3.75rem;
    }
</style>