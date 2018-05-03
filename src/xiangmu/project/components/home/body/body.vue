<template>
    <div class="shouyes">
        <router-link to="/">
            <p class="iconfont icon-shouye"></p>
            <span>首页</span>
        </router-link>
        <router-link to="/fenlei">
            <p class="iconfont icon-leimupinleifenleileibie"></p>
            <span>分类</span>
        </router-link>
        <router-link to="/car">
            <p class="iconfont icon-gouwuche"></p>
            <span class="zhanghao">购物车</span>
        </router-link>
        <router-link :to="luyou">
            <p class="iconfont icon-zhanghao"  @click="token"></p>
            <span>账号</span>
        </router-link>
    </div>
</template>

<script>
    import shouyes from "./body.css";
    import http from '../../../../pei-api/utils/httpclient.js';
    export default {
        data(){
            return {
                luyou:''
            }
        },
        methods:{
            token(){
                if(window.localStorage.getItem('token')){
                    // this.$router.push({name:'car'});
                    this.luyou = 'my'
                } else{
                    // this.$router.push({name:'login'});console.log(666);
                    this.luyou = 'login'
                }
            }
        }
    }
</script>