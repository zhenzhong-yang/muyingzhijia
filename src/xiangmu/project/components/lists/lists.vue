<template>
    <div id="list">
        <div class="head">  
            <a href="#" class="as">
                <i class="i1 iconfont icon-xiangzuojiantou" @click="back"></i>
            </a>
            <div class="soushuo">
                <input type="text" placeholder="搜索" style="color:#fff"/>
                <i class="i2 iconfont icon-search2"></i>
            </div>
        </div>
        <ul class="paixu">
            <li style="border-bottom:3px solid #FF6600"><span>综合排序</span><i>|</i></li>
            <li><span>销售</span><i>|</i></li>
            <li class="li3" @click="show = !show"><span @click="list" class="jiage">价格<i class="shang iconfont icon-quanxianfuzhi" v-if="show"/><i class="xia iconfont icon-arrow_down_full" v-else/></span><i>|</i></li>
            <li><span>筛选</span></li>
        </ul>
        <ul class="shopping">
            <li v-for="(item,index) in good_list">
                <div class="imgs">
                    
                </div>
                <div class="tp">
                    <p class="title">{{item.title}}</p>
                    <p class="price">￥{{item.price}}.00</p>
                    <img src="../img/pingjia.png" class="pingjia"/>
                </div>
            </li>
        </ul>
        <div class="yuan">
            <p class="iconfont icon-xiangshangjiantouquan"></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './lists.css'

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
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4570.00,
                    },{
                        id:3,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4870.00,
                    },{
                        id:4,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },{
                        id:5,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },{   
                        id:6,
                        title: '康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 6070.00,
                    },{
                        id:7,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4570.00,
                    },{
                        id:8,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 4870.00,
                    },{
                        id:9,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },{
                        id:10,
                        title: '康贝标准口PP奶瓶240ml',
                        qty: 2,
                        price: 10568.00,
                    },
                    {
                        id:11,
                        title: '康贝标准口PP奶瓶240ml',
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
            back(){
                window.history.back();
            }
        }
    }
    jQuery(function($){
        $(".paixu").on("click","li",function(){
            $(this).css({borderBottom:"3px solid #FF6600"}).siblings("li").css({borderBottom:"none"})
        });
        
        
    })
    window.scroll(function(){
    console.log(666);
        if(window.pageY >= 10){
            $(".yuan").css({display:"block"})
        }
    })
</script>