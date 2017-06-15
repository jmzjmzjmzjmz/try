/**
 * Created by Administrator on 2017/6/14.
 */
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
    entry:"./src/js/index.js",
    output:{
        path:'/jmz/projects/try/src/js',
        filename:'index.bundle.js'
    }
}