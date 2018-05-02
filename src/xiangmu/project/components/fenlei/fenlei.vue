<template>
    <div class="lb">
        <ul class="fl">
            <li>
               <router-link to="/fenlei1">妈妈专区</router-link> 
            </li>
            <li>
                 <router-link to="/fenlei2">奶粉捕食</router-link> 
            </li>
            <li>
                <router-link to="/fenlei3">尿裤湿巾</router-link> 
            </li>
            <li>
                <router-link to="/fenlei4">哺育喂养</router-link>
            </li>
            <li>
                <router-link to="/fenlei5">洗护用品</router-link>
            </li>
            <li>
                <router-link to="/fenlei6">宝宝服饰</router-link>
            </li>
            <li>
                <router-link to="/fenlei7">童车汽坐</router-link>
            </li>
            <li>
                <router-link to="/fenlei8">学习玩具</router-link>
            </li>
            <li>
                <router-link to="/fenlei9">床椅宴具</router-link>
            </li>
            <li>
                <router-link to="/fenlei10">收纳外出</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
        <!-- <bd></bd> -->
    </div>
</template>
<script>
    import shouyes from "../fenlei/fenlei.css"
    // import bd from '../home/body/body.vue'
    export default {
        
        
        // components: {
        //     bd
        // }        
    }
</script>