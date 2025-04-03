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

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
  });

  //Finally, we need to tell the server to actually listen for communications. 
  //We do this by calling the listen method of the server object we just created, 
  //and passing it the port and hostname we previously defined. It also accepts a callback
  // function that we can use to indicate that the server is running.

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


  