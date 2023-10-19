const request = require('request');
const fs = require('fs');
// const readline = require('readline')
// const { stdin: input, stdout: output } = require('process');

const URL = 'http://www.example.edu/';
const filePath = 'files/test.txt';
// const rl = readline.createInterface({
//   input, output});

// checks if file exists
// async function fileExists (filePath) {
//   try {
//     fs.access(filePath)
//     return true
//   }
//   catch { return false }
// }

// request
request(URL, (error, responce, body) => {
  if (error) console.log('error', error);
  // if (fileExists(filePath)) {
    // if file exists then ask to overwrite.
    // rl.question('File already exists. Press Y to overwrite.\n', (answer) => {
      // if (answer.toUpperCase() === 'Y') {
        fs.writeFile(filePath, body, err => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
        });
      // }
      // rl.close()
    // })
  // }
});