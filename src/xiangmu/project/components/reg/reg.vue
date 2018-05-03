<template>
    <div>
        <p class="reg_header">
            <a href="javascript:void(0);" style="color:#FE7E00;"><</a>
            <span>注册</span>
            <a href="javascript:void(0);"></a>
        </p>
        <div class="reg_main">
            <input type="text" id="username" placeholder="请输入手机号码" v-model="data.username"/>
            <input type="text" id="reg_codeVal" placeholder="请输入密码" v-model="data.password"/>
            <input type="text" id="reg_codeVal" placeholder="请输入验证码" v-model="myCode"/>
            <span class="reg_code" @click="flush">{{code}}</span>
            <p class="reg_btn" @click="reg">注册</p>
        </div>
        <p class="reg_footer"><span @click="checkeds">{{checked}}</span><a href="javascript:void(0);"> 同意 母婴之家注册协议</a></p>
    </div>

</template>

<script type="text/javascript">
    import './reg.css';
    import http from '../../../pei-api/utils/httpclient.js';
    export default{
        data(){
            return{
                data:{
                    username:'',
                    password:''
                },
                code:'点击刷新',
                checked:'√',
                myCode:''
            }
        },
        methods:{
            checkeds(){
                if(this.checked != ''){
                    this.checked = '';
                }else{
                    this.checked = "√";
                }
            },
            flush(){
                this.code = parseInt(Math.random()*8999+1000);
            },
            reg(){
                console.log(this.data.username);
                if(!/^1[3,4,5,7,8]\d{9}$/.test(this.data.username)){
                    alert(111);
                    return false;
                }
                if(!/[\d\D]{6,20}/.test(this.data.password)){
                    alert(222);
                    return false;
                }
                if(this.myCode != this.code){
                    alert(333);
                    return false;
                }
                http.post('reg',this.data).then((res) => {
                    // console.log(res);
                    if(res.status){
                        http.$router.push({name:'login'});
                    }
                });
            }
        }
    }
</script>