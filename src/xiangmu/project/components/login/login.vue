<template>
    <div class="login">
        <p class="login_header">
            <a href="javascript:void(0);" style="color:#FE7E00;" @click="back"><</a>
            <span>登录</span>
            <a href="javascript:void(0);"></a>
        </p>
        <div class="login_main">
            <input type="text" id="username" v-model="data.username" placeholder="请输入邮箱或手机号"/>
            <input type="password" id="password" v-model="data.password" placeholder="请输入密码(6-20位数字、字母和符号)"/>
            <p><a href="javascript:void(0);">忘记密码</a></p>
            <div class="login_main_bottiom">
                <p class="login_btn" @click="login">登录</p>
                <router-link to="/reg">新用户注册</router-link>
                <a href="javascript:void(0);" class="ver">手机验证码登录</a>
            </div>
        </div>
        <div class="pop" v-show="show" >
            <p>{{text}}</p>
            <span @click="isShow">确定</span>
        </div>
        <bodyComponent></bodyComponent>
    </div>

</template>

<script type="text/javascript">
    import bodyComponent from '../home/body/body.vue';
    import './login.css';
    import http from '../../../pei-api/utils/httpclient.js';

    export default{
        components:{
            bodyComponent
        },
        data(){
            return {
                data:{
                    username:'',
                    password:''
                },
                show:false,
                text:"用户名或密码错误"
            }
        },
        methods:{
            login(){
                http.post('login', this.data).then((res) =>{
                    console.log(res)
                    if(res.status){
                        window.localStorage.setItem('token',res.data);
                        console.log(res.message[0].username);
                        window.localStorage.setItem('username',res.message[0].username);
                        this.$router.push({name:'my'});
                        console.log(this)
                    }else{
                        this.show = true;

                    }
                });
            },
            isShow(){
                this.show = false;
            },
            back(){
                window.history.back();
            },
            mounted(){
                window.localStorage.removeItem('username');
            }
        },
    }
</script>