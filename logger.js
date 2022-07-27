const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4(), 'key');

class Logger extends EventEmitter {
  log(msg) {
    //since we're extending EventEmitter we have access to its methods
    this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
