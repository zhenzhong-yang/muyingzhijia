<template>
    <div>
        <h1>个人中心</h1>
        <bodyComponent></bodyComponent>
    </div>
</template>

<script type="text/javascript">
    import bodyComponent from '../home/body/body.vue';
    export default{
        components:{
            bodyComponent
        },
        methods:{
            token(){
                /*if(){

                }*/
                console.log(window.localStorage.getItem('token'))
            }
        }
    }
</script>