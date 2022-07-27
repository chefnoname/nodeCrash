const http = require('http');
const path = require('path');
const fs = require('fs');
const { restart } = require('nodemon');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'AbdiWali Jama', age: 40 },
  //     { name: 'Naija Xalway', age: 30 },
  //   ];

  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  let extname = path.extname(filePath);

  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if ((err.code = 'ENONET')) {
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server ErrorL ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 9898;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
