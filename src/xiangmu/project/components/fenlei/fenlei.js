import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import appComponent from './components/fenlei/fenlei.vue'
import fenlei1 from './components/fenlei1/fenlei1.vue'
import fenlei2 from './components/fenlei2/fenlei2.vue'
import fenlei3 from './components/fenlei3/fenlei3.vue'
import fenlei4 from './components/fenlei4/fenlei4.vue'
import fenlei5 from './components/fenlei5/fenlei5.vue'
import fenlei6 from './components/fenlei6/fenlei6.vue'
import fenlei7 from './components/fenlei7/fenlei7.vue'
import fenlei8 from './components/fenlei8/fenlei8.vue'
import fenlei9 from './components/fenlei9/fenlei9.vue'
import fenlei10 from './components/fenlei10/fenlei10.vue'

const router = new VueRouter({
    routes: [
        {path: '/fenlei1', name: 'fenlei1', fenlei1: fenlei1},
        {path: '/fenlei2', name: 'fenlei2', fenlei2: fenlei2},
        {path: '/fenlei3', name: 'fenlei3', fenlei3: fenlei3},
        {path: '/fenlei4', name: 'fenlei4', fenlei4: fenlei4},
        {path: '/fenlei5', name: 'fenlei5', fenlei5: fenlei5},
        {path: '/fenlei6', name: 'fenlei6', fenlei6: fenlei6},
        {path: '/fenlei7', name: 'fenlei7', fenlei7: fenlei7},
        {path: '/fenlei8', name: 'fenlei8', fenlei8: fenlei8},
        {path: '/fenlei9', name: 'fenlei9', fenlei9: fenlei9},
        {path: '/fenlei10', name: 'fenlei10', fenlei10: fenlei10}
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(appComponent)
})