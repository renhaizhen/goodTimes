<template>
    <div class="indexContainer">
        <img class="index_img" src="/static/images/user.png" alt="">
            <button open-type="getUserInfo" @getuserinfo="getUserInfo"> 获取头像昵称 </button>
        <p class="userName">hello mpvue</p>
        <div @tap="toDetail" class="goStudy">
            <p @tap.stop="handelChild">ready</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{}
        }
    },
    onLoad(){
        console.log('onload')
    },
    beforeMount(){
        console.log('beforeMount')
        //获取用户登陆信息
        wx.getUserInfo({
            success:(data)=>{
                console.log(data)
            },
            fail:(data)=>{
                console.log("fail")
            }
        })
    },
    mounted(){
        console.log('mounted')
    },
    methods:{
        getUserInfo(data){
            console.log(data,123)
        },
        toDetail(){
            console.log('detail')
        },
        handelChild(){
            console.log('child')
           wx.navigateTo({
                url:'/pages/list/main'
            })
        }
    }
}
</script>

<style>
page{
    background: #8ed415;
}
.indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
}
.userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx;
}
.goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
}
</style>
