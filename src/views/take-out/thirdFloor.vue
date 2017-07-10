<template>
    <div class="thirdFloor">
        <input type="file" id="add"><button @click="look">确定</button>
    </div>
</template>
<style>
    .thirdFloor{
        clear: both;
        width:100%;
        height:80px;
        background: yellow;
    }
</style>
<script>
    export default{
        methods:{
            look:function(){

                var formData=new FormData(document.getElementById("add").value);
                this.$http.post("/test",formData).then(function(res){
                    console.log("成功");
                   })
                }
            }
    }
</script>