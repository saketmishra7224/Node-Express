const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome to Home Page of my website</h1></body>');
    res.write('</html>');
    res.end();
  }

  else if(req.url === '/products'){
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body><h1>Welcome to the Product section</h1></body>');
    res.write('</html>');
    res.end();

  }

  else{
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome to Complete Coding</h1></body>');
    res.write('</html>');
    res.end();
  }
  
});

const port = 3000;
server.listen(port, () =>{
  console.log(`Server running on address http://localhost:${port}`);
});