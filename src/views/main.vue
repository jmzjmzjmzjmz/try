<template>
    <div class="main">
        <div class="content">
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
                <first-floor></first-floor>
                <second-floor></second-floor>
            </section>
        </div>
        <footer>底部</footer>
    </div>
</template>
<style>
    .main {
        height: 100%;
    }
    .main>.content{
        height:90%;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .main >.content > header {
        /*height: 22%;*/
        height: 24.44%;
        background: cornflowerblue;
        color: white;
        position: relative;
    }

    .main >.content > header > .top {
        height:40%;
        padding-left: 8%;
        display: flex;
        align-items: center;

    }
    .main >.content > header > .top>span{
        font-size: 16px;
    }

    .main >.content > header > .top > .placeIcon {
        width: 12px;
        height: 15px;
        margin-right: 5px;
    }

    .main >.content > header > .top > .solidArrow {
        width: 7px;
        height: 8px;
        transform: rotate(90deg);
        margin-left:8px;
    }
    .main >.content > header > .center{
        height:36%;
        width:100%;
        display: flex;
        justify-content:center;
        align-items:center;
        align-content:center;
        position: relative;
        background: red;
    }
    .main >.content > header > .center>input.bigSearch{
        display: inline-block;
        width:95%;
        height:70%;
        border-radius: 24px;
        border-style:none;
    }
    .main >.content > header > .center>.inputText{
        position: absolute;
        left: 50%;
        top:50%;
        transform:translate(-50%,-50%);
        color: dimgrey;
    }
    .main >.content > header > .center>.inputText>img{
        width: 12px;
        height: 12px;
        padding-right:10px;
    }
    .main>.content>header>.bottom{
        height:24%;
    }
    .main>.content>header>.bottom>ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .main>.content>header>.bottom>ul>li{
        width:14.2%;
        text-align: center;
        font-size:10px;
        -webkit-transform: scale(0.8);
    }
    .main >.content> section {
        /*height: 68%;*/
        height: 75.55%;
    }

    .main > footer {
        position:absolute;
        width:100%;
        height: 10%;
        background: lightgrey;
    }
</style>
<script>
    import firstFloor from './take-out/firstFloor.vue'
    import secondFloor from './take-out/secondFloor.vue'
    export default{
        components: {
            'first-floor':firstFloor,
            'second-floor':secondFloor
        }
    }
</script>
