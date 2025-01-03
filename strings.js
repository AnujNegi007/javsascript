let str = "Anuj "
let str2 = "Negi"

console.log(str + str2);

// `${}` is used for interpolation of enter values in log

let fullname = "Anuj negi"
let projectCount = 20

console.log(`My name is ${fullname} and i will make ${projectCount} in 2025`);


let gameName = new String("anuj negi")
// length is used to get the no of chars in string
console.log(gameName.length);

// here to toUppercase function will return a new value
console.log(gameName.toUpperCase());
// chatAt function is used to get the character from index
console.log(gameName.charAt(5));
// index of provide us index of the char
console.log(gameName.indexOf('j'));
// trim method 
let messywrod = "Hello World!"
console.log(messywrod.trim());
//substring method used to get a part of string
let newstring = messywrod.substring(0, 5)
console.log("substring : ",newstring);

// slice method -- H e l l o   w o r l d !"
//                 0 1 2 3 4 5 6 7 8 9 10 11
//                 -12 -11 -10 -9 -8 -6 -5 -4 -3 -2 -1
const string = "Hello world!"
const anotherString = string.slice(0, 5)
console.log("slice : ",anotherString);

// replace - is used to replace any char 
let igl = "kushi kapurwan"
console.log(igl.replaceAll('k', 'd'));

// includes check
let app = "instagram"
console.log(app.includes('n'));

// split is used to 
let anotherfunName = "anuj-negi-dev-cloud"
// if you pass an empty string it will break each and every char like this [
//   'a', 'n', 'u', 'j',
//   '-', 'n', 'e', 'g',
//   'i', '-', 'd', 'e',
//   'v'
// ]
//if we keep split blank it will make ["anuj-negi-dev-cloud"]
console.log(anotherfunName.split());
