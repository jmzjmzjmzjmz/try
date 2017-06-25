<template>
    <div class="main">
        <header>
            <div class="top">
                <img class="placeIcon" src="../imgs/location.png"/>
                <span>东方文荟苑</span>
                <img class="solidArrow" src="../imgs/solidArrow.png"/>
            </div>
            <div class="center">
                <input type="text" class="bigSearch">
                <div class="inputText">
                    <img src="../imgs/search.png"/>
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
        </header>
        <section>
            <test></test>
        </section>
        <footer>底部</footer>
    </div>
</template>
<style>
    .main {
        height: 100%;
    }

    .main > header {
        height: 22%;
        background: cornflowerblue;
        color: white;
    }

    .main > header > .top {
        height:48%;
        padding-left: 8%;
        display: flex;
        align-items: center;

    }
    .main > header > .top>span{
        font-size: 16px;
    }

    .main > header > .top > .placeIcon {
        width: 12px;
        height: 15px;
        margin-right: 5px;
    }

    .main > header > .top > .solidArrow {
        width: 7px;
        height: 8px;
        transform: rotate(90deg);
        margin-left:8px;
    }
    .main > header > .center{
        height:26%;
        width:100%;
        display: flex;
        justify-content:center;
        align-items:center;
        align-content:center;
    }
    .main > header > .center>input.bigSearch{
        display: inline-block;
        width:95%;
        height:100%;
        border-radius: 24px;
        border-style:none;
    }
    .main > header > .center>.inputText{
        position: absolute;
        color: dimgrey;
    }
    .main > header > .center>.inputText>img{
        width: 12px;
        height: 12px;
        padding-right:10px;
    }
    .main>header>.bottom{
        height:26%;
    }
    .main>header>.bottom>ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .main>header>.bottom>ul>li{
        width:14.2%;
        text-align: center;
        font-size:10px;
        -webkit-transform: scale(0.8);
    }
    .main > section {
        height: 68%;
    }

    .main > footer {
        height: 10%;
        background: lightgrey;
    }
</style>
<script>
    import test from './take-out/test.vue'
    export default{
        components: {
            test
        }
    }
</script>
