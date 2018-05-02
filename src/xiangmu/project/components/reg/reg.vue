<template>
    <div>
        <p class="reg_header">
            <a href="javascript:void(0);" style="color:#FE7E00;"><</a>
            <span>注册</span>
            <a href="javascript:void(0);"></a>
        </p>
        <div class="reg_main">
            <input type="text" id="username" placeholder="请输入手机号码"/>
            <input type="text" id="reg_codeVal" placeholder="请输入验证码"/>
            <span class="reg_code">{{code}}</span>
        </div>
        <p class="reg_footer"><span @click="checkeds">{{checked}}</span><a href="javascript:void(0);"> 同意 母婴之家注册协议</a></p>
    </div>

</template>

<script type="text/javascript">
    import './reg.css';
    export default{
        data(){
            return{
                code:'1234',
                checked:'√'
            }
        },
        methods:{
            checkeds(){
                if(this.checked != ''){
                    this.checked = '';
                }else{
                    this.checked = "√";
                }
            }
        }
    }
</script>