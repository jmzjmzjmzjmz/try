/**
 * Created by Administrator on 2017/6/29.
 */
var  MongoClient=require("mongodb").MongoClient;
var DB_CONN_STR='mongodb://localhost:27017/runoob';
var insertData=function(db,callback){
    //连接到表site
    var collection=db.collection('site');
    //插入数据
    var data=[{"name":"菜鸟教程"}];
    collection.insert(data,function(err,result){
        if(err){
            console.log("ERROR:"+err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR,function(err,db){
    console.log("连接成功！");
    insertData(db,function(result){
        console.log(result.ops[0].name);
        db.close();
    })
})