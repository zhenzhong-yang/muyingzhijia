
import Vue from 'vue';

import router from './router/router'

import appComponent from './components/app/app.vue'

// import store from "./vuex/store"

new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(appComponent)
})