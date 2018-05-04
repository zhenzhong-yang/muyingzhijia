<template>
    <div id="details">
        <hd></hd>
        <div class="tu">
            <img :src="$route.query.img" class="imgs"/>
        </div>
        <div class="deta">
            <p class="price">￥{{$route.query.price}}</p>
            <p class="name">{{$route.query.name}}</p>
            <p class="huan">加一元起可换购</p>
            <p class="jieshao">{{$route.query.jieshao}}</p>
        </div>
        <div class="muying">母婴之家发货</div>
        <div>
            <img src="../img/tu1.png" alt="" style="width: 100%;"/>
            <img src="../img/tu2.png" alt="" style="width: 100%;"/>
        </div>
        <div class="bd">
            <i class="iconfont icon-kefu kefu"></i>
            <div class="shuru">
                <i class="jian">-</i>
                <input type="text" value="1" calss="inp"/>
                <i class="jia">+</i>
            </div>
            <span class="car">加入购物车</span>
        </div>
        <back></back>
    </div>
</template>

<script type="text/javascript">
    import "./details.css"
    import hd from "../common/common-head.vue"
    import back from "../common/common-back.vue"
    export default {
        components: {
            hd,
            back
        },
        mounted(){
            jQuery(function($){
                $(".jia").on("click",function(){
                    $(this).prev()[0].value++;
                    $(this).css({background:"#d2d2d2"}).siblings(".jian").css({background:"#fff"})
                })
                $(".jian").on("click",function(){
                    $(this).next()[0].value--;
                    if($(this).next()[0].value<1){
                        $(this).next()[0].value = 1
                    }
                    $(this).css({background:"#d2d2d2"}).siblings(".jia").css({background:"#fff"})
                })
                $(".inp").on("input",function(){
                    $(this)[0].value
                })
                $(".car").on("click",function(){
                    let data = {
                        username:this.username,
                        Id:this.Id,
                        SubjectName:parseInt(this.SubjectName),
                        SujectDescv:this.SujectDescv,
                        PictureUrl:this.PictureUrl,
                        SetDiscount:this.SetDiscount,
                        OriDiscount:this.OriDiscount
                    }
                    fetch('http://localhost:88/insertcardata',{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    });
                    // http.post({
                    //     url:"insertcardata",
                    //     data:{username:$route.query.name,Id:$route.query.id},
                    //     cb:function(res){
                    //         if(res.status){
                    //             window.location.href = "car.vue"
                    //         }
                    //     }
                    // })
                })
            })
        }
    }
    
</script>