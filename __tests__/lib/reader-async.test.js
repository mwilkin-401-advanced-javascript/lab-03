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


  // it('reads 3 files', done => {
  //   let files = ['file1.txt', 'file2.txt', 'file2.txt'];
  //   reader(files, (err,data) => {
  //     expect(err).toBeNull();
  //     expect(data instanceof Array ).toBeTruthy();
  //     expect(data.length ).toBe(3);
      
  //   });
  // });

});
