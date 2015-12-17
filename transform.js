var transform = function tranasform (value, predicate, mutator) {
  if (predicate(value)) {
    return mutator(value)
  }
return value;
};

var height= 69;

var isHeightInches = function isHeightInches(height){
  return height < 100;

};
var inchesToCentimeters = function inchesToCentimeters(inches) {
  return height * 2.54;
};
height = transform(height, isHeightInches, inchesToCentimeters);
console.log(height);
