const http = require('http');
const userrequestHandler = require("./user");
const server = http.createServer(userrequestHandler); 

const port = 3000;
server.listen(port, () =>{
  console.log(`Server running on address http://localhost:${port}`);
});