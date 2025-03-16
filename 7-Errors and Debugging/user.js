
const fs = require('fs');
const { URLSearchParams } = require('url');

const userrequestHandler = (req, res) => {
  //console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title> Details </title>');
    res.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    res.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script></head>');

    res.write('<body><h1>Enter Your Details:</h1>');

    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for = "gender">Gender:</label><br>');

    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="male"> Male</label><br>');

    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<label for="female">Female</label><br>');

    res.write('<button type="submit" class="btn btn-danger"> Submit</button>')
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    res.end();
  }

  else if(req.url == "/submit-details" && req.method === "POST"){
    const body = [];
    req.on('data',chunk =>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", ()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody)

      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for(const [key,val] of params.entries()){
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      //fs.writeFileSync('user.txt', JSON.stringify(bodyObject));(It is using sync so blocking all other processes)
      
      fs.writeFile('user.txt', JSON.stringify(bodyObject), error =>{
        console.log("Data written successfully.")
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
      });
    });
   
  } 
  else{
    res.setHeader("Content-Type",'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Your Details are submitted.</h1></body>');
    res.write('</html>');
    res.end();
  }

  
};

module.exports = userrequestHandler;