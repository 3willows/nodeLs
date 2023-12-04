#!/usr/bin/env node

const fs = require('fs');

const allFiles =fs.readdir(process.cwd(), (err, filenames) =>{
  if(err)
  {
    console.log(err);
    return;  
  }
  console.log(filenames);
});
