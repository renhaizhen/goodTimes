import {RECEIVE_LIST,MOVIE_ARR} from './mutation-type'
import listData from '../datas/list-data.js'
export default {
    getList({commit}){
        //触发对应的 mutations
        console.log('action')
        commit(RECEIVE_LIST,listData)
    },
    getMoviesArr({commit},data){
        commit(MOVIE_ARR,data)
    }
}