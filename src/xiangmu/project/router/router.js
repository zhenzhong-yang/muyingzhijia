import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import homeComponent from '../components/home/home.vue'
/*购物车组件*/
import carComponent from '../components/car/car.vue'
/*登录组件*/
import loginComponent from '../components/login/login.vue'
import bw from '../components/fenlei/fenlei.vue'
import bw1 from '../components/fenlei/fenlei1/fenlei1.vue'
import bw2 from '../components/fenlei/fenlei2/fenlei2.vue'
import bw3 from '../components/fenlei/fenlei3/fenlei3.vue'
import bw4 from '../components/fenlei/fenlei4/fenlei4.vue'
import bw5 from '../components/fenlei/fenlei5/fenlei5.vue'
import bw6 from '../components/fenlei/fenlei6/fenlei6.vue'
import bw7 from '../components/fenlei/fenlei7/fenlei7.vue'
import bw8 from '../components/fenlei/fenlei8/fenlei8.vue'
import bw9 from '../components/fenlei/fenlei9/fenlei9.vue'
import bw10 from '../components/fenlei/fenlei10/fenlei10.vue'
const router = new VueRouter({
    routes: [

        {path: '/', component: homeComponent, name: 'home'},
        // {path: '/lists', component: listsComponent, name: 'lists'},

        {path: '/car', component: carComponent, name: 'car'},
        {path: '/login', component: loginComponent, name: 'login'},

        {path: '/fenlei', component: bw, name: 'fenlei',children:[
            {path: '/fenlei1', component: bw1, name: 'fenlei1'},
            {path: '/fenlei2', component: bw2, name: 'fenlei2'},
            {path: '/fenlei3', component: bw3, name: 'fenlei3'},
            {path: '/fenlei4', component: bw4, name: 'fenlei4'},
            {path: '/fenlei5', component: bw5, name: 'fenlei5'},
            {path: '/fenlei6', component: bw6, name: 'fenlei6'},
            {path: '/fenlei7', component: bw7, name: 'fenlei7'},
            {path: '/fenlei8', component: bw8, name: 'fenlei8'},
            {path: '/fenlei9', component: bw9, name: 'fenlei9'},
            {path: '/fenlei10', component: bw10, name: 'fenlei10'},
        ]}

    ]
})

export default router;