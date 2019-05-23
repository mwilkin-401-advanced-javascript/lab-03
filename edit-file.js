'use strict';

const fs = require('fs');

fs.readFile('./files/test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('data length', data.length);
  console.log(`Before ${data}`);
  let randomValue = Math.floor(Math.random()*100) +1;
   data = randomValue;

    fs.writeFile('./files/test.txt', data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

    fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('data length', data.length);
    console.log(`After ${data}`);
  });
});

