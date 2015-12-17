'use strict' ;

var max = fubction max() {
  //grab the first number to compare against
  //this will be undefined if the array passed is empty
  var maxValue = arguments[0];
  console.log(arguments[0]);
  //loopthrough the remaining numbers
  for (var i = 1; i < arguments.length; i++){
    // if the current element is greater
    //than the maxVAlue
    if (arguments[i] > maxValue){
      //replace maxValue withthe current number
      maxValue = arguments[i];
    }

  }
  //return the result
  return maxValue;
};

var result = max (-2, -1. -5);

consile.log(result);
