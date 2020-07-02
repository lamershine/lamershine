// 加载模块
const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer((req,res)=>{
    // 忽略/favicon.ico请求
    if (req.url === '/favicon.ico') {
        return;
    }
    // http://localhost:3001/user?user=xiaocuo&pass=123456
    if (req.url.indexOf('/user') !== -1 ) {
        let query = url.parse(req.url,true).query;
        res.writeHead(200,{'Content-type':'application/json'});
        if (query.user === 'xiaocuo' && query.pass === '123456') {
            fs.readFile('../../dist/json/json.html','utf8',(err,data)=>{
                if (err) {
                    res.end(`{"err":-1,"data":"获取数据失败"}`);
                } else {
                    res.end(`{"err":0,"data":${data}}`);
                }
            });
        } else {
            res.end(`{"err":-2,"data":"账号或密码错误"}`);
        }
    } else if (req.url === '/haha') {
        fs.readFile('../html/zhuce.html','utf8',(err,data)=>{
            if (err) {
                res.writeHead(200,{'Content-type':'application/json'});
                res.end(`{"err":-1,"data":"获取数据失败"}`);
            } else {
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'});
        res.end('暂无数据');
    }
    
});
server.listen(3001,()=>{
    console.log('server running ...');
})

// res.end(`callback({"err":-1,"data":"获取数据失败"})`);