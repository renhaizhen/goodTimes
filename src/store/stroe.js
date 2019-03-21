import Vue from 'vue'
import Vuex from 'vuex'
// import store from './store'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'



//声明使用Vuex
Vue.use(Vuex)

//暴露出去

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})