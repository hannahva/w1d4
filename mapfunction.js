// Implement your own version of the built-in array map function.

// Yours will take in two arguments.
// The first will be an array to map
// and the second will be a callback function.
// The function will return a new array
// based on the results of the callback function.

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {return word.length});

function map(array, callback){
  var newArray = [];
  array.forEach(function(wordInList){
    newArray.push(callback(wordInList));
  });
  return newArray;
};

