const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title> Details </title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');

    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for = "gender">Gender:</label><br>');

    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="male"> Male</label><br>');

    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<label for="female">Female</label><br>');

    res.write('<button type="submit"> Submit</button>')
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    res.end();
  }

  else if(req.url == "/submit-details" && req.method === "POST"){
    fs.writeFileSync('user.txt', 'Saket Mishra');
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
  }
  else{
    res.setHeader("Content-Type",'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Your Details are submitted.</h1></body>');
    res.write('</html>');
    res.end();
  }

  
});

const port = 3000;
server.listen(port, () =>{
  console.log(`Server running on address http://localhost:${port}`);
});