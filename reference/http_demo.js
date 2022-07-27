const http = require('http');

http
  .createServer((req, res) => {
    res.write('Hello Worldsssss');
    res.end();
  })
  .listen(6404, () => console.log('we up adn running babyy'));
