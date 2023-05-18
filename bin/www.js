const http = require('http');
const serverHandler = require('../app')
const PORT = 5050
const server = http.createServer(serverHandler)
server.listen(PORT,()=>{
  console.log("this port is running!"); 
})
