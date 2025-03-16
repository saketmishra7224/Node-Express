const http = require('http'); 
const testingSyntax = require('./syntax');
const runtime = require('./runtime');
const userrequestHandler = require('./user');
// const fs = require('fs');
// const { URLSearchParams } = require('url');

const server = http.createServer((req, res) =>{
  console.log(req.url, req.method);
  //testingSyntax();
  //runtime();
  userrequestHandler(req, res);
}); 

const port = 3000;
server.listen(port, () =>{
  console.log(`Server running on address http://localhost:${port}`);
});