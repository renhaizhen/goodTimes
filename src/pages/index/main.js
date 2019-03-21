import vue from 'vue'
import Index from './index.vue'

const index = new vue(Index)

//挂载当前的页面 不是整个应用
index.$mount()