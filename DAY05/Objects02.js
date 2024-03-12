// Method 02
// using constructor i,e (create) // singleton object

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// Nested Objects
const user = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            first:"ganesh",
            last :"kumar"
        }
    }
}

console.log(user.fullname.userfullname.first)

// Mergeing two objects
//method 1
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

//method 2
const obj4 = {...obj1,...obj2}
console.log(obj4);

// When a users or data is arrived from database
// This is the way how it comes or how it is handles

const data = [
    {
        id:"abc",   //user 1
        name:"aaa"
    },
    {
        //user 2
    },
    {
        //user 3
    },
]

// to access the array of users 
console.log(data[0].name)

// to get only Keys or Only values 
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// To check a particular properties exists in the object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('age'))



// Destructing of object

const course ={
    name : "JS",
    duration:"1 hour",
    courseInstructor:"GK"
}

//destructing
const {courseInstructor: instructor} = course

console.log(instructor)

