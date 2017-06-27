/**
 * Created by Administrator on 2017/6/14.
 */
var htmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
/*
  ①entry:"name"
  ②entry:["name1","name2"] 打包在同一个js文件中，打包文件自动通过require引入
  ③entry:{chunk1:"name1",chunk2:"name2"}
     多个chunk
     a)如果output写死是一个文件，则打包会覆盖前一个；
     b)output可以通过[name]\[hash]\[trunkhash]来区分打包后的js文件名，如filename:"dist/[name].bundle.dist"
 */
    // entry:"./src/dist/index.dist",
    entry:{index:"./home.js"},
    output:{
        path:__dirname+'',
        filename:'dist/js/[name].bundle.js'
        //publicPath是打包之后发布的地址，发布后加上publicPath，引入的js文件会自动加上打包后的地址
        // publicPath:"http://www.test"
    },
    module:{
        rules:[
            {
                test:/\.js/,
                loader:'babel-loader',
                query:{presets:['es2015']}
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
                //postcss是一个用来处理css的工具，有很多插件支持，功能强大
                //插件引用在postcss.config.js中配置
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                loaders:['url-loader?limit=1000&name=dist/images/[name]-[hash:5].[ext]',
                    'image-webpack-loader']
                //    url-loader对比file-loader?url-loader可以设置
                //    img-webpack对图片进行压缩之后再打包
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html", //地址默认在output里的path中
            template:"home.html",  //生成的html文件模板
            //将打包好的js文件加在head里
            //如果部分放在head，部分放在body,则inject:false
            // inject:"head",
            title:'try-vue'
            //在html模板中通过脚本获得 <%= htmlWebpackPlugin.options.title %>
            //压缩命令
            // minify:{
            //     removeComments:true,  //删除注释
            //     collapseWhitespace:true  //去掉空格
            // }
        }),
        // new ExtractTextPlugin("style.css")
    ],
    watch:true
}

