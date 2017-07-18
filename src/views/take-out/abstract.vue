<template>
    <div class="abstract">
        <router-view></router-view>
        <bottom-foot></bottom-foot>
    </div>
</template>
<style>
    .abstract{
        height:90%;
    }
</style>
<script>
   import bottomFoot from '../../components/bottomFoot.vue'
    export default{
        components:{
            'bottom-foot':bottomFoot
        }
    }
</script>
