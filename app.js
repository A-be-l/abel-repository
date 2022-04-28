/*
 * @Author: your name
 * @Date: 2022-04-24 17:37:08
 * @LastEditTime: 2022-04-26 17:53:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \xz\pool.js
 */
// 引入express模块
const express=require('express');
//引入user路由器
const user_router=require('./routers/user_router');
// 创建web服务器
const app=express();
//设置端口
app.listen(8080,()=>{
    console.log("web服务器启动成功");
});
//添加post传参中间件
app.use(express.urlencoded({
    extended:true
}))
//挂载路由器。路由器下的路由成为web服务器下的路由
app.use('/v1/users',user_router);
//错误处理中间件，拦截所有的错误
app.use((err,req,res,next)=>{
    //err接收到路由传递过来的错误
    console.log(err);
    //响应给前端
    res.send({code:500,msg:'服务端错误'})
})
