const stdin = process.stdin;
stdin.setEncoding("utf8");

let input = process.argv.slice(2);
const targetUrl = input[0]
const destinationPath = input[1];

const fs = require('fs');
const request = require('request');
let data;

request(targetUrl, (error, response, body) => {
  data = body;

  fs.writeFile(destinationPath, data, (err) => {
    if (err) throw err;
    process.stdout.write('The file has been saved! \n');
  });
});

