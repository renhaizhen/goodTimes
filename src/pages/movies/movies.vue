<template>
<div>
    <div @tap = 'toDetails(index)' v-for="(item,index) in movieArr" wx:key="index" class="moviesContainer">
        <img class="movieImg" :src="item.images.large" alt="">
        <div class="movieInfo">
            <p>{{item.original_title}}</p>
            <p>年份：{{item.year}}</p>
            <p>导演：{{item.directors[0].name}}</p>
        </div>
        <p class="rate">评分：{{item.rating.average}}</p>
    </div>
    </div>
</template>

<script>
const Movie_url = 'http://t.yushu.im/v2/movie/top250'
export default {
    data(){
        return{
            movieArr:[]
        }
    },
    beforeMount(){
        this.$fly.get(Movie_url).then((res)=>{
            console.log(res)
            let movies = res.data.subjects
            this.movieArr = movies
            this.$store.dispatch('getMoviesArr',movies)
        }).catch((error)=>{
            console.log(error)
        })
    },
    methods:{
        toDetails(index){
            wx.navigateTo({
                url:'/pages/movie_detail/main?index='+index
            })
        }
    }
}
</script>

<style>
.moviesContainer{
    display: flex;
    padding: 10rpx;
    border: 1px solid #eee;
}
.movieImg{
    width: 128rpx;
    height: 128rpx;
    margin-right: 20rpx;
}
.movieInfo{
    width: 70%;
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
.rate{
    font-size: 36rpx;
    color: red;
    font-weight: bold;
}
</style>
