'use strict';

const util = require('util');
const fs = require('fs');
const readOnePromise = util.promisify(readOne)

let contents = [];

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

// const readOne = util.promisify(fs.readFile);
// readFile('.').then((readFile) => {
//   // Do something with `stats`
// }).catch((error) => {
//   // Handle the error.
// });


const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */

//  let utilPromisedWay = util.promisify(someFunction);
// utilPromisedWay('bar')
//   .then(data => console.log('Util Promisify Returns: ', data))
//   .catch(console.error);

const readAll = (paths, callback) => {

  let contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log(paths[0]);
      contents.push(data.toString().trim());
      readOne(paths[1], (err, data) => {
        if (err) {
          callback(err);
        }
        else {
          console.log(paths[1]);
          contents.push(data.toString().trim());
          readOne(paths[2], (err, data) => {
            if (err) {
              callback(err);
            }
            else {
              console.log(paths[2]);
              contents.push(data.toString().trim());
              callback(null, contents);
            }
          });
        }
      });
    }   
  }); 
};

Promise.all(readAll)
  .then(handlePromiseResolve)
  .catch(console.error);
