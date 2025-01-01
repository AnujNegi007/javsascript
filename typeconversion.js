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


