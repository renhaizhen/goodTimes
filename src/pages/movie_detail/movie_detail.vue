<template>
    <div class="movieContainer">
        <img :src="movieDetails.images.large" alt="">
        <p class="movieName">{{movieDetails.original_title}}</p>
        <div class="movieInfo">
            <p>评分：{{movieDetails.rating.average}}</p>
            <p>导演：{{movieDetails.directors[0].name}}</p>
            <p>主演：{{movieDetails.casts[0].name}} {{movieDetails.casts[1].name}} {{movieDetails.casts[2].name}}</p>
        </div>
        <button class="watch">我要观影</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            movieDetails:[]
        }
    },
    computed:{
        ...mapState(['movieArr'])
    },
    beforeMount(){
        console.log(this)
        this.index = this.$mp.query.index
        this.movieDetails = this.movieArr[this.index]
        console.log(this.movieDetails)
    }
}
</script>

<style>
.movieContainer img{
    display: block;
    margin: 0 auto;
    margin-top: 30rpx;
    width: 450rpx;
    height: 700rpx;
} 
.movieName{
    font-size: 40rpx;
    text-align: center;
    font-weight: bold;
    padding: 10rpx;
}
.movieInfo{
    width: 450rpx;
    text-align: left;
    margin: 0 auto;
}
.movieInfo p{
    font-size: 32rpx;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
}
.movieInfo p:nth-of-type(2){
    font-size: 28rpx;
    color: #999;
    margin: 5px 0;
}
.movieInfo p:nth-last-of-type(3){
    font-size: 30rpx;
    color: #666;
}
.watch{
    width: 70%;
    height: 80rpx;
    background-color: green;
    line-height: 80rpx;
    color: #fff;
    font-size: 28rpx;
    margin-top: 20rpx;
}
</style>
