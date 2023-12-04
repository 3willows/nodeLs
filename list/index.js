#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

// method #2
// const lstat = util.promisify(fs.lstat);

// method #3
// const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  //   for (let name of filenames){
  //     try {
  //     const stats = await lstat(name);
  //     console.log(name, stats.isFile());
  //     } catch (err){
  //       console.log(err);
  //     }
  //   }
  // });

  // method #1

  

  const lstat = (filename) => {
    return new Promise((resolve, reject) => {
      fs.lstat(filename, (err, stats) => {
        if (err) {
          reject(err);
        }
      })
      resolve(stats);
    });
  };
})