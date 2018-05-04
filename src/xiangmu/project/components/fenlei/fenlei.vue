<template>

    <div class="lb">
        <ul class="fl_l">
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
        <!-- <bd></bd> -->
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import lb from "../fenlei/fenlei.css"
    import shouye from "../home/body/body.css"
    // import bd from '../home/body/body.vue'
    // export default {
    //     components: {
    //         bd
    //     }        
    // }

    <div>
        <h1>fenlei</h1>
        <bodyComponent></bodyComponent>
    </div>
</template>

<script type="text/javascript">
    import bodyComponent from '../home/body/body.vue';
    export default{
        components:{
            bodyComponent
        }
    }

</script>