/**
 * Created by Administrator on 2017/6/28.
 */
import '../css/style.css'
import find from '../views/find/find.vue'
import bottomFoot from '../components/bottomFoot.vue'
import Vue from 'vue'
new Vue({
    el:'#app',
    components:{
        find,
        'bottom-foot':bottomFoot
       }
});