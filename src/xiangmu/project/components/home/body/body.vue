<template>
    <div class="shouyes">

        <!-- <router-link to="/home"> -->

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

        <router-link to="/my">
            <p class="iconfont icon-zhanghao"></p>
            <span>账号</span>
        </router-link>
    </div>
</template>

<script>
    import shouyes from "./body.css";
    import http from '../../../../pei-api/utils/httpclient.js';
    export default {
        methods:{
            token(){
                http.get('user').then((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>