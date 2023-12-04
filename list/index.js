#!/usr/bin/env node

const fs = require('fs');

const allFiles = fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  const allStats = Array(filenames.length).fill(null);
  console.log(allStats);

  for (let name of filenames) {
    const index = filenames.indexOf(name);
    fs.lstat(name, (err, stats) => {
      if (err) {
        console.log(err);
      }
      allStats[index] = stats;

      const ready = allStats.every((element) => {
        return element;
      })
      // console.log(name, stats.isFile())

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile())
        })
      }
    })
  }
  console.log(allStats);
  // this will return [null, null] because fs.lstat is an async function
})
