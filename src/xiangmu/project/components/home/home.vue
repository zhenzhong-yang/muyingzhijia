
<template>
    <div id="box">
        <div class="erzu-header">
            <hd></hd>
        </div>
        <div class="erzu-main">
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
    import bd from './body/body.vue'

    export default {
        components: {
            hd,
            bd
        }
    }
</script>