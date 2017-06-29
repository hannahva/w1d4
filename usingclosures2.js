var countdownGenerator = function (x) {
  var i = x;

  return function(){
    if(i === 0) console.log("Blast off!");
    if(i < 0) console.log("Rocket's already gone, bub!");
    if(i > 0) console.log("T-minus " + i + "...");
    i--;
  }
};

countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!