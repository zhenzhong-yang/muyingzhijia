<template>
    <div class="fl2">
        <div class="fenlei_r">
            <h2><span>|</span>新品</h2>
            <ul v-for="(item,index) in goods" class="xinpin">
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <h3 class="sz"><span>|</span>奶粉</h3>
            <ul v-for="(item,index) in goods" class="shizhuang">
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <h3 class="sz1"><span>|</span>纸巾</h3>
            <ul v-for="(item,index) in goods" class="shizhuang">
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
                <li>
                    <p><img src="../../../../img/xr2.png" alt="" /></p>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import shouyes from "./fenlei2.css"

    export default {
            data(){
                return{
                    goods: [{
                            id:1,
                            title: '康贝标准口'
                        },{
                            id:2,
                            title: '康贝标准口PP'
                        },{
                            id:5,
                            title: '康贝标准口PP'
                        }]
                    }
                }
            }
</script>