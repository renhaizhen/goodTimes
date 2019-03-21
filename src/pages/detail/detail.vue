<template>
    <div class="detailContainer">
        <img class="header" :src="detailObj.show" alt="">
        <div class="avatar_date">
            <img :src="detailObj.detail_img" alt="">
            <span>新华社</span>
            <span>发布与</span>
            <span>{{detailObj.date}}</span>
        </div>
        <p class="company">陈绮贞简介</p>
        <div class="share">
            <div class="share_container">
            <img @tap='collect' :src="isCollected?'/static/images/unshou.png':'/static/images/shou.png'" alt="">
            <img src="/static/images/kan.png" alt="">
            </div>
        <div class="line"></div>
        </div>
        <button>转发此文章</button>
        <p class="contents">{{detailObj.detail_content}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    // onLoad(options){
    //     console.log(options)
    // }
    data(){
        return {
            detailObj:{},
            isCollected:false
        }
    },
    beforeMount(){
        console.log(this)
        //使用this.$mp.query.index取代onLoad中的options
        this.index = this.$mp.query.index
        //预处理本地是否收藏
        let oldStorage = wx.getStorageSync('isCollected')
        if(!oldStorage){
            wx.setStorage({
                key:'isCollected',
                data:{}
            })
        }else{
            //用户缓存过          
            this.isCollected = (oldStorage[this.index]?true:false)
        }
    },
    mounted(){
        this.detailObj = this.ListTmp[this.$mp.query.index]
        console.log(this.detailObj)

    },
    computed:{
        ...mapState(['ListTmp'])
    },
    methods:{
        collect(){
            let isCollected = !this.isCollected
            this.isCollected = isCollected
            let title = isCollected?'收藏成功':'取消收藏'
            wx.showToast({
                title,
                icon:'success'
            })

            //读取之前缓存道本地的状态
            let oldStorage = wx.getStorageSync('isCollected')
            oldStorage[this.index]=isCollected
            wx.setStorage({
                key:'isCollected',
                data:oldStorage
            })
        }
    }
}
</script>

<style>
.detailContainer{
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 400rpx;
}
.avatar_date img{
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
}
.avatar_date span{
    font-weight: 28rpx;
    margin-left: 6rpx;
}
.company{
    font-size: 32rpx;
    flex-wrap: bold;
    padding: 10rpx;
}
.share{
    position: relative;
}
.share_container{
    float: right;
    margin-right: 30rpx;
}
.share img{
    width: 70rpx;
    height: 70rpx;
    margin-right: 20rpx;
}
.line{
    width: 90%;
    height: 1rpx;
    position: absolute;
    background-color: #eee;
    left: 5%;
    top: 35rpx;
}
.contents{
    font-size: 32rpx;
    text-indent: 32rpx;
    letter-spacing: 3rpx;
    line-height: 50rpx;
}
</style>
