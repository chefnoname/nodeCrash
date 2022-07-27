const url = require('url');

const myUrl = new URL('http://abdicodes.com/hello.html?id=100&status=active');

//Serialized url

// console.log(myUrl.href);

//Root Domain
console.log(myUrl.host);

console.log(myUrl.searchParams);
