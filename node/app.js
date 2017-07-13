var fs=require("fs");
var multiparty=require("multiparty");
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
app.post('/try/test',jsonParser,function(req,res){
    // 解决代码
    // res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    // MongoClient.connect(DB_CONN_STR,function(err,db){
    //     var collection=db.collection("site");
    //     collection.find().toArray(function(err,result){
    //         if(err){
    //             console.log("Error:"+err);
    //             return;
    //         }
    //         console.log("连接成功！");
    //         res.end(JSON.stringify(result));
    //     })
    // });
    // var data='';
    // req.on('data',function(chunk){
    //     data+=chunk;
    // });
    // req.on("end",function(){
    //     console.log(data);
    // })
    // if(req.url === '/try/*' && req.method === 'POST'){
        var form=new multiparty.Form();
        form.uploadDir = "F:/projects/webstormProjects/try/dist/files/";
        form.parse(req,function(err,fields,files){
            // var fileTemp=JSON.stringify(files,null,2);
            var fileTemp=JSON.stringify(files);
            if(err){
                console.log("parse error:"+err);
            }else{
                var inputFile=files.file[0];
                var uploadPath=inputFile.path;
                var dstPath=form.uploadDir+inputFile.originalFilename;
                fs.rename(uploadPath,dstPath,function(err){
                    if(err){
                        console.log("rename:"+err);
                    }else{
                        console.log(files.file[0].path.substring(44,files.file[0].path.length));
                    }
                });
            }
            res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
            res.end(fileTemp);
        });
    // }
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