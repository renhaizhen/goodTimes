<template>
<div>


    <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
        <swiper-item>
            <img src="/static/images/1.jpg" alt="">
        </swiper-item>
        <swiper-item>
            <img src="/static/images/2.jpg" alt="">
        </swiper-item>
        <swiper-item>
            <img src="/static/images/3.jpg" alt="">
        </swiper-item>
    </swiper>
    <div>
        <ListTmp v-for="(item,index) in ListTmp" :key="index" :item="item" :index="index">
        </ListTmp>
    </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'
import ListTmp from '../list_template/list_template.vue'
export default {
    components:{ListTmp},
    beforeMount(){
        //分发action 修改状态
        this.$store.dispatch('getList')
    },
    computed:{
        //映射状态到本组件
        ...mapState(['ListTmp'])
    }
}
</script>

<style>

</style>
