const request = require('request');
const fs = require('fs');

// node fetcher.js <website page> <file path>
// example: node fetcher.js 'http://www.example.edu/' 'test.txt'
let { [0]:URL, [1]:filePath } = process.argv.splice(2);

// request for url page
request(URL, (error, responce, body) => {
  if (error) { // edge case 3
    console.error(error);
    return;
  }
  // write into file to givin path
  fs.writeFile(filePath, body, err => {
   
    if (err) { // edge case 2
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  });
});