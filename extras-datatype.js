// ------------ Two type of datatypes ---------------
//Primitive (call by value) -> string, number, bigint, null, undefined, symbol, boolean

let a = 10;

let str = "i'm iron man"

let bign = 12345n
console.log(typeof(bign));


// non-primitive or refernce type  -> arrays, objects,  functions, date
// FIXME: In JavaScript, everything that is not a primitive type is considered an object

const marvel = ["iron-man", "spiderman", "thor"]

let person = {
    name : 'anuj',
    age: 21,
}

const myfn = function functionname(){
    console.log("Hello world!");
}

let date = new Date()

console.log(typeof(myfn));


// ---------------------- Main differnce -------------------------
// Primitive Example
let x = 10;
let y = x; // y is a copy of x
x = 20;
console.log(y); // output: 10

// Non-Primitive Example
let obj1 = {
    name: "ankit"
}
let obj2 = obj1 // obj2 is a reference to obj1
obj2.name = "vivek"
console.log(obj1);





