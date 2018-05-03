
<template>
    <div id="box">
        <div class="erzu-header">
            <hd></hd>
        </div>
        <div class="erzu-main">
            <lb></lb>
            <mian1></mian1>
            <mian2></mian2>
            <mian3></mian3>
            <top></top>
            <router-view></router-view>
        </div>
        <div class="erzu-body">
            <bd></bd>
        </div>
    </div>
</template>
<script>
    import './home.css'

    import hd from './header/header.vue'
    import lb from './lunbotu/lunbotu.vue'
    import mian1 from './mian1/mian1.vue'
    import mian2 from './mian2/mian2.vue'
    import mian3 from './mian3/mian3.vue'
    import top from './Top/top.vue'
    import bd from './body/body.vue'

    export default {
        components: {
            hd,
            lb,
            mian1,
            mian2,
            mian3,
            top,
            bd
        }
    }
</script>