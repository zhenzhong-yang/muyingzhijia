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
            <li v-for="(item,index) in dataset">
                <router-link :to="{name:'details',query:{id:item.Id,price:item.SetDiscount,img:item.PictureUrl,name:item.SubjectName,jieshao:item.SujectDesc}}">
                <img :src="item.PictureUrl" class="imgs"/>
                <div class="tp">
                    <p class="title">{{item.SubjectName}}</p>
                    <p class="price">￥{{item.SetDiscount}}</p>
                    <img src="../img/pingjia.png" class="pingjia"/>
                </div>
                </router-link>
            </li>
        </ul>
        <back></back>
    </div>
</template>

<script type="text/javascript">
    import './lists.css'
    import hd from "../common/common-head.vue"
    import back from "../common/common-back.vue"
    import http from '../../utils/httpclient'
    export default {
        data(){
            return {
                dataset:[],
                n:0,
                show:true
            }
        },
        methods:{
            list(){
                let lis = this.dataset;
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
                    console.log(lis.sort(paixu("SetDiscount")));
                }else{
                    console.log(lis.sort(paixu("SetDiscount")).reverse())
                } 
            },
            
        },
        components: {
            hd,
            back
        },
        mounted(){
            http.get("/todayspecial").then((res) => {
                this.dataset = res.data.data;
                console.log(this.dataset)
            });
            jQuery(function($){
                $(".paixu").on("click","li",function(){
                    $(this).css({borderBottom:"3px solid #FF6600"}).siblings("li").css({borderBottom:"none"})
                });      
            })
        }
    }
    
    
</script>