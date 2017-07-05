<template>
    <div class="topHeader">
        <div class="top">
            <img class="placeIcon" src="../../assets/imgs/location.png"/>
            <span>东方文荟苑</span>
            <img class="solidArrow" src="../../assets/imgs/solidArrow.png"/>
        </div>
        <div class="center" ref="inputSearch">
            <input type="text" class="bigSearch">
            <div class="inputText">
                <img src="../../assets/imgs/search.png"/>
                <span>搜索商家、商品名称</span>
            </div>
        </div>
        <div class="center" id="topSearch" v-if="showTopSearch">
            <input type="text" class="bigSearch">
            <div class="inputText">
                <img src="../../assets/imgs/search.png"/>
                <span>搜索商家、商品名称</span>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li>混沌</li>
                <li>豆沙粽</li>
                <li>手扒鸡</li>
                <li>鸡柳</li>
                <li>我的菜</li>
                <li>花甲</li>
                <li>鸡蛋面</li>
            </ul>
        </div>
    </div>
</template>
<style>
    .topHeader {
        height:100%;
    }

    .topHeader > .top {
        height:40%;
        padding-left: 8%;
        display: flex;
        align-items: center;

    }
    .topHeader> .top>span{
        font-size: 16px;
    }

    .topHeader> .top > .placeIcon {
        width: 12px;
        height: 15px;
        margin-right: 5px;
    }

    .topHeader> .top > .solidArrow {
        width: 7px;
        height: 8px;
        transform: rotate(90deg);
        margin-left:8px;
    }
    .topHeader> .center{
        height:36%;
        width:100%;
        display: flex;
        justify-content:center;
        align-items:center;
        align-content:center;
        position: relative;
        background: rgb(0,149,254);
    }
    .topHeader> .center>input.bigSearch{
        display: inline-block;
        width:95%;
        height:70%;
        border-radius: 24px;
        border-style:none;
    }
    .topHeader> .center>.inputText{
        position: absolute;
        left: 50%;
        top:50%;
        transform:translate(-50%,-50%);
        color: dimgrey;
    }
    .topHeader> .center>.inputText>img{
        width: 12px;
        height: 12px;
        padding-right:10px;
    }
    #topSearch{
        position: fixed;
        top:0px;
        z-index:999;
        height:8%;
    }
    .topHeader>.bottom{
        height:24%;
    }
    .topHeader>.bottom>ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .topHeader>.bottom>ul>li{
        width:14.2%;
        text-align: center;
        font-size:10px;
        -webkit-transform: scale(0.8);
    }
</style>
<script>
    export default{
        data:function(){
            return{
                showTopSearch:false,
                up:true,
                mtop:0
            }
        },
        mounted:function(){
           this.mtop=this.$refs.inputSearch.offsetTop;
        },
        props:['stop'],
        watch:{
            stop:function(val){
                if(val>this.mtop){
                    this.up=false;
                    this.showTopSearch=true;
                }else if(val<this.mtop) {
                    this.up = true;
                    this.showTopSearch=false;
                }
            }
        }
    }
</script>