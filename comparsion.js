let x = null
let xInNumber = Number(x)
console.log(xInNumber, typeof xInNumber)
/* 
console.log(null >= 0); Explanation: Jab hum null ko kisi number ke saath compare karte hain using >=, JavaScript null ko 0 mein convert kar deta hai. Toh yeh comparison ban jaata hai 0 >= 0, jo true hai.

Output: true

console.log(null == 0); Explanation: == operator type conversion karta hai. Lekin null aur 0 ko compare karte waqt, JavaScript inhe equivalent nahi maanata. Null sirf undefined ke barabar hota hai.

Output: false

console.log(null > 0); Explanation: Yeh comparison bhi null ko 0 mein convert kar deta hai. Toh 0 > 0 check hota hai, jo false hai.

Output: false
*/
console.log(null >= 0);
console.log(null === 0);
console.log(null > 0);




