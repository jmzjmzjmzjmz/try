var express=require("express");
var path=require('path');
var app=express();
app.get('/',function(req,res){
    // res.send("hello world")
    res.sendFile(path.join(__dirname,'../home.html'))
});
// 利用Express托管静态文件，可多次调用
// 将静态资源文件所在的目录作为参数传递给express.static中间件就可以提供静态资源的访问了
//   express.static是express内置的唯一一个中间件
app.use(express.static(path.join(__dirname,'../dist')));
var server=app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})