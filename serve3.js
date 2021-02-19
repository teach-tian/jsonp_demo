var http = require('http');
var http = require('http');

var fs=require('fs');

http.createServer((req,res)=>{
 //设置允许跨域的域名，*代表允许任意域名跨域  CORS跨域
//  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:3003");
      if(req.url=='/api/v1/home'){
          let obj= {"name":"tom","age":"18"}

          res.end(JSON.stringify(obj));
      }else{
          res.end('404')
      }
}).listen('3002',function(err){
   if(!err)console.log('服务器运行在127.0.0.1:3002上')
})