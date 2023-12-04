const fs = require('fs');

const allFiles =fs.readdir('..', (err, filenames) =>{
  if(err)
  {
    console.log(err);
    return;  
  }
  console.log(filenames);
});
