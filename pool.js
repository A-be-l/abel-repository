/*
 * @Author: your name
 * @Date: 2022-04-26 17:24:56
 * @LastEditTime: 2022-04-26 17:28:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \xz\pool.js
 */
// 引入mysql模块
const mysql=require('mysql');
//创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    post:'3306',
    user:'root',
    password:'123zkf',
    database:'xz'
})
//暴露pool
module.exports=pool;