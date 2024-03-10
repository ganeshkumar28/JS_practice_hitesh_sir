const marvel = ["thor","hulk","ironman"]
const dc = ["superman","flsh","batman"]

// marvel.push(dc)   //This won't merge the two array instead this will add the dc array into marvel array

// console.log(marvel)
// console.log(marvel[3][0])

const all=marvel.concat(dc)
console.log(all)   //this merges two array and gives result as an new array

const all2 = [...marvel,...dc] //mathod 2 :to merge two array
console.log(all2);  //... is spread operator which separtes all the array elements

//flat() method: is used to convert all sub-arrays present in array into one single array
const otherarr=[1,2,3,[4,5,6],7,[8,4,7,[4,3]]]
const use_arr = otherarr.flat(Infinity); 
console.log(use_arr)

//To convert any string into array, we use a from method.
const str = "ganesh"
console.log(Array.from(str))

console.log(Array.from({name:"ganeh"})); //This is an intresting case ## interview question 

//To convert mutliple variables into a single array
let score1 = 100
let score2 = 250
let score3 = 350

console.log(Array.of(score1,score2,score3))

