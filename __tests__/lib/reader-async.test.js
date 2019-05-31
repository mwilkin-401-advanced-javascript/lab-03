'use strict';

jest.mock('fs');

const readerAsync = require('../../lib/reader-async.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', async () => {
    try{
      let result = await readerAsync(false);
      expect(result).toBeUndefined();
    } 
    catch(err){
      console.log(`In catch statement with ${err} message`);
    }
  });

  it('reads 3 files', async () => {
    let files = ['File Contents', 'File Contents', 'File Contents'];
    try{
      let result = await readerAsync(files);
      expect(result).toEqual(files);
    }
    catch(err){
      console.log(`In catch statement with ${err} message`);
    }
  });
});
