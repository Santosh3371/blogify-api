const http = require('http');

const { logMessage } = require('./utils/log');

const server = http.createServer((req, res) => {

  logMessage('A new request was received!'); 

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is attempting to run at http://localhost:${PORT}/`);
});