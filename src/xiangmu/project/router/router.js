import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import homeComponent from '../components/home/home.vue'
import listsComponent from '../components/lists/lists.vue'

const router = new VueRouter({
    routes: [
        {path: '/home', component: homeComponent, name: 'home'},
        {path: '/lists', component: listsComponent, name: 'lists'}
    ]
})

export default router;