<template>
    <div>
        <h1>{{username}}</h1>
        <bodyComponent></bodyComponent>
    </div>
</template>

<script type="text/javascript">
    import bodyComponent from '../home/body/body.vue';
    import http from '../../../pei-api/utils/httpclient.js';
    // import http from '../../../pei-api/utils/httpclient.js';
    export default{
        data(){
            return{
                username:''
            }
        },
        components:{
            bodyComponent
        },
        mounted(){
            http.post('getStatus',{}).then((res) => {
                if(res.status){
                    let username = window.localStorage.getItem('username');
                    this.username = username;
                }
            })
        }
    }
</script>