// In Javascript, the datatypes are classified into two types :
// 1.Primitive
// 2. Non Primitive or Reference type 

// These datatypes are classified based on two factors:
// 1. Storing the data in memory
// 2. Accessing data frm memory

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];

//Object
let myObj = {
    name: "hitesh",
    age: 22,
}


//Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack(Primitive) , Heap(Non-Primitive)
// =>Stack is used by primitive datatypes
// =>Stack always gives a copy of the data

let member1 = "Steven gerard"

let member2 = member1
member2 = "Messi" 

console.log(member1);
console.log(member2);

//Heap 
//Heap is used by the non primitive data types
//Heap gives the reference of original variable

let marvel1 ={
    name:"Steve Roger",
    age:35
}

let marvel2 = marvel1

marvel2.name = "tony Stark"

console.log(marvel1.name);
console.log(marvel2.name);

// note: whatever is changed in the data non primitive datatypes it is actually updated in original data in the heap 
