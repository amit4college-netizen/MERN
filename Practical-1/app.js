const http = require('http'); // Import Node's built-in web server module

const PORT = 3000;

// Configure the server to respond with text
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! Your Node.js server is working.');
});

// Start listening for web requests
server.listen(PORT, () => {
  console.log(`Server is running! Open http://localhost:${PORT} in your browser.`);
});
