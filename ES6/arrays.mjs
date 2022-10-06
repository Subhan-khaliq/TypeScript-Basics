//arrays
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car);

//objects
const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName,person.lastName+" is",person.age);

//numerically sort arrays Asec
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

//numerically sort arrays Desc
const arrays = [40,100,200,500];
arrays.sort(function(a, b) {return b-a});

//arrays filters
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;}

console.log(over18);
