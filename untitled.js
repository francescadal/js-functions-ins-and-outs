'use strict' ;

var addProperty = function addProperty(obj, name, value) {
  obj[name] = value;

};

var person = {
  givenName: 'Carmen',
  surName: 'SanDiego',
  dob : '19610213'
};

addProperty(person, 'height', 69 );

console.log(person);
