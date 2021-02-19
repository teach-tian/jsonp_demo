var http = require('http');
var http = require('http');

var fs=require('fs');

http.createServer((req,res)=>{

      if(req.url=='/'){
          let data=fs.readFileSync('./home.html');

          res.end(data);
      }else{
          res.end('404')
      }
}).listen('3001',function(err){
   if(!err)console.log('服务器运行在127.0.0.1:3001上')
})