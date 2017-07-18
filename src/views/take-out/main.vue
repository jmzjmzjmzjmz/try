<template>
        <div class="main" @scroll="touchTop" ref="content">
            <header>
                <top-header :stop="stop"></top-header>
            </header>
            <section>
                <first-floor></first-floor>
                <second-floor></second-floor>
                <third-floor></third-floor>
            </section>
        </div>
</template>
<style>
    .main{
        height:100%;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .main>header {
        height: 24.44%;
        background: rgb(0,149,254);
        color: white;
        position: relative;
    }
    .main > section {
        height: 77.55%;
    }
</style>
<script>
    import topHeader from './topHeader.vue'
    import firstFloor from './firstFloor.vue'
    import secondFloor from './secondFloor.vue'
    import thirdFloor from './thirdFloor.vue'
    import bottomFooter from '../../components/bottomFoot.vue'
    export default{
        data:function(){
          return{
              mtop:0,
              stop:0,
          }
        },
        components: {
            'top-header':topHeader,
            'first-floor':firstFloor,
            'second-floor':secondFloor,
            'third-floor':thirdFloor,
            'bottom-footer':bottomFooter
        },
        methods:{
            touchTop:function(){
                this.stop=this.$refs.content.scrollTop;
            }
        }
    }
</script>
