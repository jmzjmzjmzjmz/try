<template>
        <div class="find">
            <header>

            </header>
            <section>
                <first-floor></first-floor>
            </section>
        </div>
</template>
<style>
    .find{
        height:90%;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .find>header {
        height: 10%;
        background: rgb(0,149,254);
        color: white;
        position: relative;
    }
    .find> section {
        height: 90%;
    }
</style>
<script>
    import firstFloor from './firstFloor.vue'
    export default{
        data:function(){
            return{

            }
        },
        components: {
           'first-floor':firstFloor
        },
        methods:{

        }
    }
</script>
