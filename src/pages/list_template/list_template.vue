<template>
    <div @tap="todetail" class="temConainer">
        <div class="avatar_date">
            <img src="/static/images/head.webp" alt="">
            <span>{{item.date}}</span>
        </div>
        <p class="name">heson</p>
        <img class="detail_img" :src="item.show" alt="">
        <p>{{item.detail_content}}</p>
        <div class="view_star_container">
            <img src="/static/images/shou.png" alt="">
            <span>{{item.shou_account}}</span>
            <img src="/static/images/kan.png" alt="">
            <span>{{item.kan_account}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'item','index'
    ],
    methods:{
        //跳转到详情页面+传参过去index
        todetail(){
            wx.navigateTo({
                url:'/pages/detail/main?index=' + this.index
            })
        }
    }
}
</script>

<style>
    .temConainer{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #eee; 
    }
    .avatar_date{
        padding: 10rpx;
    }
    .avatar_date img{
        width: 60rpx;
        height: 60rpx;
        vertical-align: middle;
        margin-right: 10rpx;
    }
    .avatar_date span{
        font-size: 28rpx;
        color: #333333;
    }
    .name{
        font-size: 40rpx;
        font-weight: bold;
        padding: 10rpx;
    }
    .detail_img{
        font-size: 32rpx;
        text-indent: 32rpx;
        line-height: 50rpx;
        letter-spacing: 3rpx;
    }
    .view_star_container img{
        width: 32rpx;
        height: 32rpx;
        vertical-align: middle;
        margin-left: 10rpx;
    }
    .view_star_container span{
        font-size: 28rpx;
        color: #333;
        margin-left: 10rpx;
    }
</style>
