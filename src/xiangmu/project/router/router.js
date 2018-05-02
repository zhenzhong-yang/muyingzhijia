import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import homeComponent from '../components/home/home.vue'
/*购物车组件*/
import carComponent from '../components/car/car.vue'
/*登录组件*/
import loginComponent from '../components/login/login.vue'

const router = new VueRouter({
    routes: [
        {path: '/home', component: homeComponent, name: 'home'},
        {path: '/car', component: carComponent, name: 'car'},
        {path: '/login', component: loginComponent, name: 'login'}
    ]
})

export default router;