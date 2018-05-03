import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homeComponent from '../components/home/home.vue'

import listsComponent from '../components/lists/lists.vue'

import detailsComponent from "../components/details/details.vue"

/*购物车组件*/
import carComponent from '../components/car/car.vue';
/*登录组件*/
import loginComponent from '../components/login/login.vue';
/*注册组件*/
import regComponent from '../components/reg/reg.vue';
/*分类组件*/
import fenleiComponent from '../components/fenlei/fenlei.vue';


const router = new VueRouter({
    routes: [
        {path: '/home', component: homeComponent, name: 'home'},

        {path: '/lists', component: listsComponent, name: 'lists'},

        {path: '/details', component: detailsComponent, name: 'details'},

        {path: '/car', component: carComponent, name: 'car'},
        {path: '/login', component: loginComponent, name: 'login'},
        {path: '/reg', component:regComponent, name: 'reg'},
        {path: '/fenlei', component:fenleiComponent, name: 'fenlei'}
    ]
})

export default router;