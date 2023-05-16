// get

const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res)=>{
  const method = req.method
  const url = req.url
  const path = querystring.parse(url.split('?')[0]) // parse: 字符串解析为对象
  const query = querystring.parse(url.split('?')[1]) // parse: 字符串解析为对象
  const content = {
    method,
    url,
    path,
    query
  }
  res.setHeader('Content-Type', 'application/json') // 设置响应头的数据类型
  res.end(
    JSON.stringify(content), // stringify: 对象转换为JSON格式
  );
})
server.listen(6060,()=>{
  console.log('listening on port');
})
