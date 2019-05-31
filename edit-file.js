'use strict';

const fs = require('fs');


// Get args from command line
let args = process.argv;

// Make sure used properly, error if not
if(args.length < 2){
  console.error('Not enough args');
  return; //read: end process, however that needs to happen
}

let sourceFile = args[2];


// Else, do work
for(let i = 0; i < args.length; i++){
  console.log(args[i]);
}


fs.readFile(`${sourceFile}`, 'utf8', (err, data) => {
  let randomValue = Math.floor(Math.random()*100) +1;
  data = randomValue;
  if (err) throw err;
  console.log('data length', data.length);
  console.log(`Before ${data}`);
    fs.writeFile(`${sourceFile}`, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      fs.readFile(`${sourceFile}`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('data length', data.length);
        console.log(`After ${data}`);
    });

  });
});