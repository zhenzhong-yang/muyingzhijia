import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import homeComponent from '../components/home/home.vue'

const router = new VueRouter({
    routes: [
        {path: '/home', component: homeComponent, name: 'home'}
    ]
})

export default router;