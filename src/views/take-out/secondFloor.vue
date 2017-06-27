<template>
    <div class="secondFloor">
       <div class="secondFood" v-for="item in secondFoods">
         <div class="left">
            <span class="boldFont">{{item.title}}</span><br>
            <span class="smallFont">{{item.des}}</span>
         </div>
         <img :src="item.img"/>
       </div>
    </div>
</template>
<style>
    .boldFont{
        color: #000;
        font-size:14px;
        font-weight:bold;
    }
    .smallFont{
        font-size:10px;
        -webkit-transform: scale(0.8);
    }
    .secondFloor>.secondFood{
        box-sizing: border-box;
        float: left;
        background: white;
        width:50%;
        height:60px;
        display: flex;
        align-items: center;
        border-bottom:1px solid #e8e8e8;
        border-left:1px solid #e8e8e8;
    }
    .secondFloor>.secondFood>.left{
        float: left;
        position: relative;
        left:8%;
    }
   .secondFloor>.secondFood>img{
       width: 45px;
       height: 40px;
       float: left;
       position: relative;
       left:30%;
   }
</style>
<script>
    export default{
       data:function(){
           return{
               secondFoods:[
                   {
                       img:'./src/imgs/secondFood1.jpg',
                       title:'热卖套餐',
                       des:'附近畅销美食'
                   },
                   {
                       img:'./src/imgs/secondFood2.jpg',
                       title:'热卖套餐',
                       des:'附近畅销美食'
                   },
                   {
                       img:'./src/imgs/secondFood3.jpg',
                       title:'热卖套餐',
                       des:'附近畅销美食'
                   },
                   {
                       img:'./src/imgs/secondFood4.jpg',
                       title:'热卖套餐',
                       des:'附近畅销美食'
                   }
               ]
           }
       }
    }
</script>