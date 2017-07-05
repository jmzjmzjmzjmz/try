var  MongoClient=require("mongodb").MongoClient;
var DB_CONN_STR='mongodb://localhost:27017/runoob';
var express=require("express");
var path=require('path');
var bodyParser=require("body-parser");
//创建application/x-www-form-urlencoded编码解析
// var urlencodedParser=bodyParser.urlencoded({extend:false});
var  jsonParser=bodyParser.json();
var app=express();
app.get('/',function(req,res){
    // res.send("hello world")
    res.sendFile(path.join(__dirname,'../dist/Home.html'))
});
app.get('/find',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/Find.html'))
});
app.post('/test',jsonParser,function(req,res){
    MongoClient.connect(DB_CONN_STR,function(err,db){
        console.log("连接成功！");
    });
   response={name:req.body.name};
   res.end(JSON.stringify(response));
});
// 利用Express托管静态文件，可多次调用
// 将静态资源文件所在的目录作为参数传递给express.static中间件就可以提供静态资源的访问了
//   express.static是express内置的唯一一个中间件
app.use(express.static(path.join(__dirname,'../dist')));
app.use(express.static(path.join(__dirname,'../src/assets')));
var server=app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})