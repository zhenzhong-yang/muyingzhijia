<template>
    <div id="list">
        <div class="head">  
        </div>
        <ul class="paixu">
            <li><span>综合排序</span><i>|</i></li>
            <li><span>销售</span><i>|</i></li>
            <li class="li3"><span>价格</span><i>|</i></li>
            <li><span>筛选</span></li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import './lists.css'

    export default {
        components: {

        }
    }
    jQuery(function($){
        $(".paixu").on("click","li",function(){
            $(this).css({borderBottom:"2px solid #FF6600"}).siblings("li").css({borderBottom:"none"})
        });
        
    })
</script>