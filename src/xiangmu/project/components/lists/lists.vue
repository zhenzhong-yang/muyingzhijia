<template>
    <div id="list">
        <hd></hd>
        <ul class="paixu">
            <li style="border-bottom:3px solid #FF6600"><span>综合排序</span><i>|</i></li>
            <li><span>销售</span><i>|</i></li>
            <li class="li3" @click="show = !show"><span @click="list" class="jiage">价格<i class="shang iconfont icon-quanxianfuzhi" v-if="show"/><i class="xia iconfont icon-arrow_down_full" v-else/></span><i>|</i></li>
            <li><span>筛选</span></li>
        </ul>
        <ul class="shopping">
            <router-link to="/details">
                <li v-for="(item,index) in good_list">
                    <div class="imgs">
                        
                    </div>
                    <div class="tp">
                        <p class="title">{{item.title}}</p>
                        <p class="price">￥{{item.price}}.00</p>
                        <img src="../img/pingjia.png" class="pingjia"/>
                    </div>
                </li>
            </router-link>
        </ul>
        <back></back>
    </div>
</template>

<script type="text/javascript">
    import './lists.css'
    import hd from "../common/common-head.vue"
    import back from "../common/common-back.vue"
    export default {
        data(){
            return {
                good_list:[
                    {   
                        id:1,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 6070.00,
                    },{
                        id:2,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4570.00,
                    },{
                        id:3,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4870.00,
                    },{
                        id:4,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },{
                        id:5,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },{   
                        id:6,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 6070.00,
                    },{
                        id:7,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4570.00,
                    },{
                        id:8,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4870.00,
                    },{
                        id:9,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },{
                        id:10,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },
                    {
                        id:11,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },
                ],
                n:0,
                show:true
            }
        },
        methods:{
            list(){
                let lis = this.good_list;
                function paixu(li){
                    return function(a,b){
                        let val1 = a[li];
                        let val2 = b[li];
                        return val1-val2;
                    }
                }
                this.n++;
                console.log(this.n)
                if(this.n%2 != 0){
                    console.log(lis.sort(paixu("price")));
                }else{
                    console.log(lis.sort(paixu("price")).reverse())
                } 
            },
            
        },
        components: {
            hd,
            back
        }
    }
    jQuery(function($){
        $(".paixu").on("click","li",function(){
            $(this).css({borderBottom:"3px solid #FF6600"}).siblings("li").css({borderBottom:"none"})
        });      
    })
    
</script>