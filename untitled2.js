'use strict' ;

// example problem

//var product = function product () {
  //var result = 1;

  //for (var i = 0; i < arguments.length; i++) {
  //result *= arguments[i];
  //}
  //return result;
//};
//var result = product(1, 2, 3);

//console.log(result);

var arrayTimes2 = function arrayTimes2(array) {

  for (var i = 0; i <array.length; i++) {
    array[i] *= 2;
  }
};

var array = [1, 4, 9];
arrayTimes2(array);

console.log(array);

arraytimes2 = [2, 3, 5, 7, 11];
console.log(array);
