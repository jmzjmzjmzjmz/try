/**
 * Created by Administrator on 2017/6/14.
 */
import '../css/style.css'
import routes from '../config/routes'
import Vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
Vue.use(vueResource);
Vue.use(vueRouter);
const router=new vueRouter({routes});
new Vue({router}).$mount("#app")