// Create a function called wrapLog()
// that takes in a function (callback) and a string (name)
// and returns a function that does the same thing as callback
// but also logs the name, input parameters, and return value
// of the callback function:


var wrapLog = function (callback, name) {
  return function(x, y, z){
      var args = [x, y, z];
      var newArgs = [];
      args.forEach(function(item){if (item != undefined) newArgs.push(item)});
      console.log(name + "(" + newArgs.join(", ") + ") => " + callback(x, y, z));
  };

};


var area = function (x, y) {
  return x * y;
};


var volume = function (x, y, z) {
  return x * y * z;
};



var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 20  <--- TYPO: SHOULD SAY 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24