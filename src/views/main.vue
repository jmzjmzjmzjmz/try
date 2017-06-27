<template>
    <div class="main">
        <div class="content" @scroll="touchTop" ref="content">
            <header>
                <top-header :stop="stop"></top-header>
            </header>
            <section>
                <first-floor></first-floor>
                <second-floor></second-floor>
                <third-floor></third-floor>
            </section>
        </div>
            <footer>
                <bottom-footer></bottom-footer>
            </footer>
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
    .main>.content>header {
        height: 24.44%;
        background: rgb(0,149,254);
        color: white;
        position: relative;
    }
    .main >.content> section {
        height: 77.55%;
    }

    .main > footer {
        position: fixed;
        width:100%;
        height: 8%;
        bottom:0px;
    }
</style>
<script>
    import topHeader from './take-out/topHeader.vue'
    import firstFloor from './take-out/firstFloor.vue'
    import secondFloor from './take-out/secondFloor.vue'
    import thirdFloor from './take-out/thirdFloor.vue'
    import bottomFooter from './components/bottomFoot.vue'
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
