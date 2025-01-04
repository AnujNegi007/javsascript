let score = 50

let health = new Number(190.965)
// affect values after decimal
console.log(health.toFixed(2));
// toprecison used before decimal
console.log(health.toPrecision(3));
// tosring
console.log(health.toString().charAt(0));
// toLocalstring
const number = 10000000
console.log(number.toLocaleString());

// -------------- Math -------------------
let negNumber = 10
console.log(Math.abs(negNumber));
console.log(Math.round(4.5))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.min(10, 1, 3));
console.log(Math.max(10, 1, 3));
console.log((Math.random() * 10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);













