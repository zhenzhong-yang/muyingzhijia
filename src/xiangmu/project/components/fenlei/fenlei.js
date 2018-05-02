import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import appComponent from './components/fenlei/fenlei.vue'
import fenlei1 from './components/fenlei1/fenlei1.vue'
import fenlei2 from './components/fenlei2/fenlei2.vue'
import fenlei3 from './components/fenlei3/fenlei3.vue'

const router = new VueRouter({
    routes: [
        {path: '/fenlei1', name: 'fenlei1', fenlei1: fenlei1},
        {path: '/fenlei2', name: 'fenlei2', fenlei2: fenlei2}
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(appComponent)
})