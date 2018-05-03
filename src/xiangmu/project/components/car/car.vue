<template>
    <div style="display:flex;flex-direction:column;position:relative;height:100%;">
        <ul class="car_header">
            <li @click="back">&lt;</li>
            <li>购物车</li>
            <li class="redact" ><span @click="redact">{{text}}</span></li>
        </ul>

        <ul class="car_main">
            <li class="title">
                <label for="foot-check" class="input-label" :class="{active: selected_all}" @click="slect_all"></label>
                <h5 style="width:100%;">母婴之家商城</h5>
            </li>
            <li v-for="(item,index) in good_list">
                <div class="input-block">
                    <label class="input-label" :class="{active: item.is_selected}" @click="select_one(index)"></label>
                </div>
                <div class="center">
                    <img :src="item.imgurl" alt=""  class="img"/>
                    <p class="good_name">{{item.title}}</p>
                    <div>
                        <span class="number_sub" @click="sub(index)">-</span>
                        <input type="number" class="car_number" readonly="readonly" :value="item.num"/>
                        <span class="number_add" @click="add(index)">+</span>
                    </div>
                </div>
                <span>￥{{item.price}}</span>
            </li>
            <li class="car_footer">
                <span>小计：<em>￥{{totalPrice}}</em></span>
            </li>
        </ul>
        <div class="title bottom_fixed">
            <label for="foot-check" class="input-label" :class="{active: selected_all}" @click="slect_all"></label>
            <h5 style="color:#929292;">全选</h5>
            <span>总计：<em>￥{{totalPrice}}</em></span>
            <p class="btn" @click="btn">{{btn_txt}}</p>
        </div>
        <bodyComponent class="test"></bodyComponent>
    </div>
</template>

<script type="text/javascript">
    import bodyComponent from '../home/body/body.vue'; 
    import './car.css';

    export default {
            components:{
                bodyComponent
            },
            data () {
                return {
                    good_list: [
                        {   
                            id:1,
                            title: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 6070.00,
                            imgurl:'http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg',
                            is_selected: false
                        },{
                            id:2,
                            title: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 4570.00,
                            imgurl:'http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg',
                            is_selected: false
                        },{
                            id:3,
                            title: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 4870.00,
                            imgurl:'http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg',
                            is_selected: false
                        },{
                            id:4,
                            title: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 10568.00,
                            imgurl:'http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg',
                            is_selected: false
                        },{
                            id:5,
                            title: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 10568.00,
                            imgurl:'http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg',
                            is_selected: false
                        },
                    ],
                    totalPrice: 0,
                    totalNum: 0,
                    selected_all: false,
                    text:"编辑",
                    btn_txt:"去结算",
                    arr:[]
                }
            },
            
            /*监听数据*/
            watch: {
                'good_list': {
                    /*回调函数*/
                    handler: function (val, oldVal) {
                        console.log(val);
                        return val;
                    },
                    deep: true //对象内部的属性监听，即深度监听  
                }
            },
            methods: {
                getTotal() {
                    this.totalPrice = 0;
                    this.totalNum = 0;
                    let good = 0;
                    for (let i = 0; i < this.good_list.length; i++) {
                        let _d = this.good_list[i];
                        if(_d.is_selected){
                            this.totalPrice += _d['price'] * _d['num'];
                            this.totalNum += _d['num'];
                            good += 1;
                            if(good == this.good_list.length){
                                this.selected_all = true;
                            }else{
                                this.selected_all = false;
                            }
                        }
                    }
                },
                /*单选*/
                select_one(index) {
                    if(this.good_list[index].is_selected == true){
                        this.good_list[index].is_selected = false;
                    }else{
                        this.good_list[index].is_selected = true;

                    }
                    this.getTotal();
                },
                /*全选*/
                slect_all() {
                    if(this.selected_all == true){
                        for (let i = 0; i < this.good_list.length; i++) {
                            this.good_list[i].is_selected = false;
                        }
                        this.selected_all = false;                   
                    }else{
                        for (let i = 0; i < this.good_list.length; i++) {
                            this.good_list[i].is_selected = true;
                        }
                        this.selected_all = true;                  
                    }
                    this.getTotal();
                },
                /*减*/
                sub(index) {
                    if(this.good_list[index].num <= 1) return false;
                    this.good_list[index].num --;
                    this.getTotal();
                },
                /*加*/
                add(index) {
                    this.good_list[index].num ++;
                    this.getTotal();
                },
                redact(){
                    if(this.text == "编辑"){
                        this.text="完成";  
                        this.btn_txt = "删除";                      
                    }else{
                        this.text = "编辑";
                        this.btn_txt = "去结算";
                    }
                },
                btn(){
                    if(this.btn_txt == "去结算"){
                        for(let i = 0; i<this.good_list.length; i++){
                            let _arr = this.good_list[i];
                            if(_arr.is_selected){
                                console.log(_arr);
                                this.arr.push(_arr);
                            }
                        }
                        console.log(this.arr);
                    }
                    if(this.btn_txt == "删除"){
                        for(let i = 0; i<this.good_list.length; i++){
                            let _del = this.good_list[i];
                            if(_del.is_selected){
                                this.good_list.splice(i,1);
                            }
                        }
                    }
                    /*this.$router.push({name:'login'});*/
                },
                back(){
                    window.history.back();
                },
            }
        }
</script>