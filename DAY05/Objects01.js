// Important for Interview persective

// singleton 
// whenever a object is created using constructor 


//Method 01
// using object literals

//INTERVIEW QUESTION : The interview will ask u to use the symbol datatype in object and access it.
const sym = Symbol("key1")

const User = {
    name:"ganesh",
    age: 21,
    "full name" : "ganesh kumar u", //to give string as a key
    [sym]:"mykey",   //this is the syntax to use or declare a symbol type in object
    location: "Bly",
    email: "ganesh@example.com",
    isLoggedIn:false,
    lastLogin:["monday","saturday"]
}

console.log(User.email)  //method 1 to access
console.log(User["email"]); //method 2 to access
console.log(User["full name"]) // take away tip

console.log(User[sym]) //access syntax for symbol

// update the properties of the object
User.email = "gk@mail.com"
console.log(User["email"]);

//Lock or freeze the properties of the object so that no one can update pr change it
//Object.freeze(User)     // freeze the whole object
console.log(User)  

User.greeting = function(){
    console.log("Hello!")
    console.log(`Hello!, ${this.name}`) // String Interpolation
}

console.log(User.greeting)      //return an anoymous function i,e it return the reference of the function
console.log(User.greeting())    // return the executed function





