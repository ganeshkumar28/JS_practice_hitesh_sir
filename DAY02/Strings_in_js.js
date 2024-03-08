const name = "Ganesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); Outdated Syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // New Version Syntax

const gameName = new String('Ganesh-Gk-com')

//########## String Prototype Methods #################
// console.log(gameName[0]);
// console.log(gameName.__proto__);

//Length method
// console.log(gameName.length);

// To upper case method
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // to find character at this index 
console.log(gameName.indexOf('e')); // to find index of given character

const newString = gameName.substring(0, 4)  //string declaraction type 2 
console.log(newString);

const anotherString = gameName.slice(-8, 4) //slice method
console.log(anotherString);

const newStringOne = "   ganesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim method

const url = "https://ganesh.com/ganesh%20kumar"

console.log(url.replace('%20', '-')) // replace method

console.log(url.includes('sundar')) // includes method

console.log(gameName.split('-')); // split method