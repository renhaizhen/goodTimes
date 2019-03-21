import {RECEIVE_LIST,MOVIE_ARR} from './mutation-type'

export default {
 [RECEIVE_LIST](state,{listData}){
     state.ListTmp = listData
     console.log(state)
 },
 [MOVIE_ARR](state,data){
    state.movieArr = data
    console.log(state)
}
}