/**
 * Created by Administrator on 2017/6/14.
 */
import '../css/style.css'
import mainPage from '../views/take-out/main.vue'
import bottomFoot from '../components/bottomFoot.vue'
import Vue from 'vue'
new Vue({
    el:'#app',
    components:{
        mainPage,
        'bottom-foot':bottomFoot
       }
});