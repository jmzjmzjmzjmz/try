/**
 * Created by Administrator on 2017/6/14.
 */
import './src/css/style.css'
import mainPage from './src/views/main.vue'
new Vue({
    el:'#app',
    data:{
        msg:"hello vue!"
    },
    components:{mainPage}
});