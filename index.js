//First, we want to use the require keyword to include the http module, 
//which is built into Node (and does not need to be installed separately by npm). 
//This module allows node to transfer data over the Hyper Text Transfer Protocol 
//(HTTP) used by the internet.

const http = require('http');

//Next, we need to define the location and port of the server. 
//For now, we will use a local address; there are better ways to handle this, 
//which we will explore in future lessons.

const hostname = '127.0.0.1';
const port = 3000;

//The createServer method of the http object allows us to define how the server will behave.
// The configuration below is extremely simple for example purposes, 
//and will only ever respond with a status code of 200 (meaning “success”) and the text content
// “Hello World!”

//The variables req and res correspond to the request and response objects of the server communications.
// Each of these has a variety of properties and methods that we will explore in future lessons. 
//These abbreviations are used almost everywhere, so you should familiarize yourself with them.

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
//   });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url === "/") {
        res.end('<h1 style="color:red">Hello World!</h1>');
    } else if (req.url === '/github') {
        res.end(`     
        <html>
<head>
<style>
body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(45,45,45);
    color: white;
    font-family: sans-serif;
  }
  </style>
  </head>
  <body>
<h1>Check out my Github!!</h1>
<a href = "https://github.com/Josefbautista94" target="_blank" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s" alt="Cool pic" width="300"></a>
</body>
</html>   
`   )
    }

    else if (req.url === '/easterEgg') {
        res.end(`
        <html>
          <head>
            <style>
              body {
                margin: 0;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background-color: rgb(45,45,45);
                color: white;
                font-family: sans-serif;
              }
            </style>
          </head>
          <body>
            <h1>Check this out!</h1>
            <img src="https://www.vice.com/wp-content/uploads/sites/2/2024/07/Megaman_retro_3D_by_cezkid.gif" alt="Cool pic" width="300">
          </body>
        </html>
      `);
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

//Finally, we need to tell the server to actually listen for communications. 
//We do this by calling the listen method of the server object we just created, 
//and passing it the port and hostname we previously defined. It also accepts a callback
// function that we can use to indicate that the server is running.

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


