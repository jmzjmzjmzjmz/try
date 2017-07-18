/**
 * Created by Administrator on 2017/7/18.
 */
import main from '../views/take-out/main.vue'
import abstract from '../views/take-out/abstract.vue'
export default[
    {
        path:'/',
        component:abstract,
        children:[{
            path:'/',
            component:main
        }]
    }
]