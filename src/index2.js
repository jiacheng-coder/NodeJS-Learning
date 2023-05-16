// post
// 使用apifox进行测试

const http = require('http');
const server = http.createServer((req, res)=>{
  if (req.method === 'POST'){
    let postData = ''
    req.on('data', chunk=>{
      postData += chunk.toString() // 二进制->字符串
    })
    req.on('end',()=>{
      res.end(
        JSON.stringify({
          data: postData,
          contentType: req.headers['content-type'] 
        })
      );
    })
  }
})
server.listen(6060,()=>{
  console.log('listening on port!');
})
