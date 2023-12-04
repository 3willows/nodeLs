#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const chalk=require("chalk"); 
// this is not supported in the latest version of chalk
// look into dynamic import later

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  const statPromises = filenames.map(name => {
    return lstat(name);
  })

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()){
    console.log(filenames[index])
    }
    else{
      console.log(chalk.blue(filenames[index]));
    }
  }
});

// method #1

// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     })
//   });
// };