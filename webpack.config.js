/**
 * Created by Administrator on 2017/6/14.
 */
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
    entry:"src/js/index.js",
    output:{
        path:'./src/js',
        filename:'index.bundle.js'
    },
    modules:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            }
        ]
    },
    vue:{
        loaders:{
            js:'babel',
            css:ExtractTextPlugin.extract({fallback:'vue-style-loader',use:'css-loader sass-loader'}),
            exclude:/node_modules/
        }
    },
}