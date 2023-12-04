const counterObject = require('./myscript.js');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./myscript.js');

console.log(newCounterObject.getCounter());
newCounterObject.incrementCounter();
console.log(newCounterObject.getCounter());

// console.log(require.cache)

// console.log(message);

// console.log(arguments);
// console.log(export);
// console.log(require);
// console.log(module);
// console.log(__filename);
// console.log(__dirname);

