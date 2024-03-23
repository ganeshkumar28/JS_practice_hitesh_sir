// for of loop

const arr = [1,2,4,5]

for(let a of arr){
    console.log(a);
}

const str = "Hello world!"

for (const s of str) {
    console.log(s);
}

// Maps

const map = new Map()

map.set("IN","India")
map.set("USA","United states of america")
map.set("UK","United Kingdom")
map.set("UK","United Kingdom")

console.log(map)

// printing key and value
for (const [key,val] of map) {
    console.log(key," => ",val);
}

const myObj = {
    game1 : "nfs",
    game2 : "vice city"
}

// objects cannot be iterated using forof loop 
// for (const [key,val] of myObj) {
//     console.log(key," => ",val);
// }   // This throws error

// to iterate the object, we have forin loop

for (const key in myObj) {
    console.log(key, " => ", myObj[key])
}

//Can forin loop also works in array?
const ar = ["js","cpp","rb","css"]

for (const key in ar) {
    console.log(ar[key])
}   // forin loop works good even in arrays

// for each loop: This loop is used to execute a function to each items of the array
// It takes callback function
// It will not return anything 
//foreach loop cannot be assigned to any variable becoz it does not return anything
const hero =["Thor","Iron Man","Hulk"]

hero.forEach(element => {
    console.log(element);
});

// Even we can pass a function in foreach loop
function PrintMe(item){
    console.log(item);
}
hero.forEach(PrintMe);

//You can even give muliple parameters in for each loop
hero.forEach((item,index,hero) => {
    console.log(item , index,hero);
});

//Foreach loop in objects
const mycoding = [
    {
        languageName : "javascript",
        languageFile: "js",
    },
    {
        languageName : "C++",
        languageFile: "cpp",
    },
    {
        languageName : "java",
        languageFile: "java",
    },
    {
        languageName : "python",
        languageFile: "py",
    },
]

mycoding.forEach(item => {
    console.log(item.languageName ," => ", item.languageFile);
})