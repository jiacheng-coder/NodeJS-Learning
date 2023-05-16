const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res)=>{
  const method = req.method
  const url = req.url
  const query = querystring.parse(url.split('?')[1]) // parse: 字符串解析为对象
  req.query = query
  res.end(
    JSON.stringify(req.query), // stringify: 对象转换为JSON格式
  );
})
server.listen(6060,()=>{
  console.log('listening on port');
})
