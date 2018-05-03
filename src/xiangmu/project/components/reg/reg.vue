<template>
    <div>
        <p class="reg_header">
            <a href="javascript:void(0);" style="color:#FE7E00;" @click="back"><</a>
            <span>注册</span>
            <a href="javascript:void(0);"></a>
        </p>
        <div class="reg_main">
            <input type="text" id="reg_username" placeholder="请输入手机号码" v-model="data.username"/>
            <input type="text" id="reg_password" placeholder="请输入密码" v-model="data.password"/>
            <input type="text" id="reg_codeVal" placeholder="请输入验证码" v-model="myCode"/>
            <span class="reg_code" @click="flush">{{code}}</span>
            <p class="reg_btn" @click="reg">注册</p>
        </div>
        <p class="reg_footer"><span @click="checkeds">{{checked}}</span><a href="javascript:void(0);"> 同意 母婴之家注册协议</a></p>
        <div class="pop" v-show="show" >
            <p>{{text}}</p>
            <span @click="isShow">确定</span>
        </div>
        
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
                myCode:'',
                show:false,
                text:''
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
                    this.show = true;
                    this.text = '请填入正确的邮箱或手机号';
                    return false;
                }
                if(!/[\d\D]{6,20}/.test(this.data.password)){
                    this.show = true;
                    this.text = '密码长度必须为6~20位';
                    return false;
                }
                if(this.myCode != this.code){
                    this.show = true;
                    this.text = '验证码错误';
                    return false;
                }
                if(!this.checked){
                    this.show = true;
                    this.text = '勾选母婴之家注册协议后方能注册';
                    return false;
                }
                http.post('reg',this.data).then((res) => {
                    console.log(res);
                    if(res.insertedCount == 1){
                        this.$router.push({name:'login'});
                    }else{
                        this.show = true;
                        this.text = '手机号已被注册';
                        return false;
                    }
                });
            },
            back(){
                window.history.back();
            },
            isShow(){
                this.show = false;
            },
        }
    }
</script>