<template>
   <div class="bottomFoot">
       <ul class="bottomIcon">
           <li @click="currentPage='takeOut'" :class="[currentPage=='takeOut'?current:'']">
           <!--<li @click="currentPage='takeOut'" :class="[1==1?current:'']">-->
               <i class="imooc-icon">&#xe9a3;</i>
               <div class="smallFont">外卖</div>
           </li>
           <li @click="currentPage='find'" :class="[currentPage=='find'?current:'']">
               <i class="imooc-icon">&#xe94a;</i>
               <div class="smallFont">发现</div>
           </li>
           <li @click="currentPage='order'" :class="[currentPage=='order'?current:'']">
               <i class="imooc-icon">&#xe922;</i>
               <div class="smallFont">订单</div>
           </li>
           <li @click="currentPage='mine'" :class="[currentPage=='mine'?current:'']">
               <i class="imooc-icon">&#xe971;</i>
               <div class="smallFont">我的</div>
           </li>
       </ul>
   </div>
</template>
<style>
    .bottomFoot{
        height:100%;
    }
    .bottomFoot>ul.bottomIcon{
        width:100%;
        height:100%;
    }
    .bottomFoot .bottomIcon>li{
        box-sizing: border-box;
        float: left;
        width:25%;
        height:100%;
        background: rgb(245,245,245);
        text-align: center;
        padding-top:5px;
    }
    .bottomFoot .bottomIcon>li.current{
        color:cornflowerblue;
    }
</style>
<script>
    export default{
        data:function(){
          return{
              currentPage:'',
              current:'current'
          }
        },
        methods:{
            choose:function(e){
                e.target.style.color="cornflowerblue";
            }
        }
    }
</script>