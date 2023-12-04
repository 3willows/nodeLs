// const message = 'bye there';

// module.exports = message;

let counter = 0;

module.exports = {
  incrementCounter(){
    counter++;
  },
  getCounter(){
    return counter;
  }
}