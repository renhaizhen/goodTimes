import Vue from 'vue'
import store from './store/stroe.js'
import App from './app.vue'
import Fly from 'flyio/dist/npm/wx'
//设置vue的提示功能关闭
Vue.config.productionTip = false;
let fly =new Fly
Vue.prototype.$fly=fly
// 声明当前组件的类型
App.mpType = 'app' //应用

//将store 对象放置到Vue原型上 为的是每个实例都可以使用
Vue.prototype.$store = store

const app = new Vue(app)


//挂载整个应用
app.$mount()