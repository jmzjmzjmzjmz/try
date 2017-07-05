<template>
    <div class="thirdFloor">
        <input type="text"><button @click="look">确定</button>
    </div>
</template>
<style>
    .thirdFloor{
        clear: both;
        width:100%;
        height:80px;
        background: red;
    }
</style>
<script>
    export default{
        methods:{
            look:function(){
                this.$http.post("/test",{name:"jmz"}).then(function(res){
                    console.log(res.body)
                   })
                }
            }
    }
</script>