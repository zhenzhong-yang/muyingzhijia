<template>
    <div class="head">  
        <a href="#" class="as">
            <i class="i1 iconfont icon-xiangzuojiantou" @click="back"></i>
        </a>
        <div class="soushuo">
            <input type="text" placeholder="搜索" style="color:#fff"/>
            <i class="i2 iconfont icon-search2"></i>
        </div>
    </div>
</template>

<script type="text/javascript">
    import header from "./common-head.css"
    export default {
        methods:{
            back(){
                window.history.back();
            }
        }
    }
    jQuery(function($){
        $(window).scroll(function(){
            var scrollTop = window.scrollY;

            if(scrollTop >= 200){
                console.log(666)
                $(".head").addClass("fixed");
            }else{
                $(".head").removeClass("fixed");
            }
        });
    })
</script>
