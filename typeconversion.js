// "33" will easily converted into 33 but if we try do "33abc" it shows NAN(Not a number) same will undefined but in null it shows 0
let score = "33"
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber) 

// if we try to convert any number or string into a boolean then any non-zero value is converted into true and any string converted into true but any empty string is converted into false 
let isLoggedIn = 0
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisLoggedIn);
console.log(booleanisLoggedIn);

// 35 -> "35"
let randomNumber = 35
let stringNumber = String(randomNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

// ----------------------- Arthematic OPERATIONS ---------------------

// additon
console.log(2 + 2);
// subtraction
console.log(2 - 2);
// multplication
console.log(2 * 2);
// power
console.log(2 ** 3);
// divison
console.log(2 / 2);
// module 
console.log(9 % 2);

let str1 = "Hello"
let str2 = " javascript!"
// when we perfrom + alway string
// but in others alway number
console.log(str1 + str2);
let val = "1" + 2
console.log(typeof val);
let val2 = 1 + "2"
console.log(typeof val2);
let val3 = "2" - 1
console.log(typeof val3, val3);
let val4 = 2 - "1"
console.log(typeof val4, val4);
let val5 = "2" * "5"
console.log(typeof val5, val5);
let lastValue = 1 + 2 - "5"
console.log("Last value : ", typeof lastValue, lastValue);
// ----------------- opertation precedence ----------------
/*
Parentheses () - Grouping expressions
Exponentiation **
Multiplication *, Division /, Remainder %
Addition + and Subtraction -
*/
console.log("3" + 2 * 5 ** 2 / 2);

// if we perform arthemctic except string it will do all operation but in string it shows string
const final = true 
console.log(final, typeof final);






