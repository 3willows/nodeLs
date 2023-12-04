#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const chalk=require("chalk"); 
// this is not supported in the latest version of chalk
// look into dynamic import later

const path = require('path');

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd(); 

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  const statPromises = filenames.map(name => {
    return lstat(path.join(targetDir, name));
  })

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()){
    console.log(chalk.yellow(filenames[index]))
    }
    else{
      console.log(chalk.blue(filenames[index]));
    }
  }
});
