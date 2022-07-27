const fs = require('fs');
const path = require('path');

// create a folder:

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created');
// });

// create and write

// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'We used Node to write this',
//   err => {
//     if (err) throw err;
//     console.log('we made a file');

//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       `

//       We appended to this file withing our writeFile fn`,
//       err => {
//         if (err) throw err;
//         console.log('we edited a file');
//       }
//     );
//   }
// );

//read file

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
