const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/Home'){
    res.write('<h1>Welcome to Home.</h1>');
    return res.end();
  }
  else if(req.url === '/Men'){
    res.write('<h1>Welcome to Men section.</h1>');
    return res.end();
  }
  else if(req.url === '/Women'){
    res.write('<h1>Welcome to Women section.</h1>');
    return res.end();
  }
  else if(req.url === '/Kids'){
    res.write('<h1>Welcome to Kids section.</h1>');
    return res.end();
  }
  else if(req.url === '/Cart'){
    res.write('<h1>Welcome to Cart section.</h1>');
    return res.end();
  }


  res.write(
    `<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Men">Men</a></li>
        <li><a href="/Women">Women</a></li>
        <li><a href="/Kids">Kids</a></li>
        <li><a href="/Cart">Cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>
    `
  );
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on address http://localhost:3000');

});