<template>
    <div class="top">
        <img src="../../../../img/jiantou.png" height="30" width="29" alt="" />
    </div>
</template>

<script>
    import top from "./top.css"
    export default {}
    document.addEventListener('DOMContentLoaded',function(){
        var top = document.getElementsByClassName('top');
        console.log(top);
        window.onscroll = function(){
            var scrollTop = window.scrollY;
            if(scrollTop >= 200){
                top.style.display = 'block';
            }else{
                top.style.display = 'none';
            }
        }
        top.onclick = function(){
            console.log(888)
            var timer = setInterval(function(){
                var scrollTop = window.scrollY;
                var speed = parseInt(scrollTop/5);

                scrollTop -= speed;
                if(speed <= 10){
                    clearInterval(timer);
                    scrollTop = 0;
                }
                scrollTop(0,scrollTop);
            },30)
        }
    });
</script>