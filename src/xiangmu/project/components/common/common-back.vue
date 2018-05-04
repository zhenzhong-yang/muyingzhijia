<template>
    <div class="yuan">
        <p class="iconfont icon-xiangshangjiantouquan"></p>
    </div>
</template>

<script type="text/javascript">
    import back from "../common/common-back.css" 
    export default{
        mounted(){
            jQuery(function($){  
                $(window).scroll(function(){
                    if(window.scrollY >= 50){
                        $(".yuan").css({display:"block"})
                    }else if(window.scrollY < 50){
                        $(".yuan").css({display:"none"})
                    }
                });

                $(".yuan").on("click",function(){
                    console.log(666)
                    $(this).parents("html").animate({scrollTop: 0},'800');
                });
            })
        }
    }
    
</script>