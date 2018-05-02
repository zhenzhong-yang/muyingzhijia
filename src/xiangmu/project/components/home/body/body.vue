<template>
    <div class="shouyes">
        <div>
            <p class="iconfont icon-shouye"></p>
            <span>首页</span>
        </div>
        <div>
            <p class="iconfont icon-leimupinleifenleileibie"></p>
            <span>分类</span>
            <router-link to="/fenlei">fenlei</router-link>
        </div>
        <div>
            <p class="iconfont icon-gouwuche"></p>
            <span class="zhanghao">购物车</span>
        </div>
        <div>
            <p class="iconfont icon-zhanghao"></p>
            <span>账号</span>
        </div>
    </div>
</template>

<script>
    import shouyes from "./body.css"
    export default {}
</script>