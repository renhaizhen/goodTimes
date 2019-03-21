import vue from 'vue'
import Movie_detail from './movie_detail.vue'

const movie_detail = new vue(Movie_detail)

//挂载当前的页面 不是整个应用
movie_detail.$mount()