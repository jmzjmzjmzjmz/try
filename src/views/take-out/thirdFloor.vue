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
                var file=document.getElementById("add").files[0];
                var formData=new FormData();
                formData.append('file',file);
                console.log(formData);
                this.$http.post("/try/test",formData).then(function(res){

                   })

                }
            }
    }
</script>