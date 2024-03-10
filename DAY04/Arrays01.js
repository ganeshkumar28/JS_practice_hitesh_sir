const arr = [7,1,8,3,true,"ganesh"] //method 1
console.log(arr);

const heros = ["Cpt levi","Naruto"]
console.log(heros);

const arr2 = new Array(1,2,3,"zeus") // method 2
console.log(arr2);
console.log(arr2[3]);


//Array Methods

arr.push(10)    //adds the new value
console.log(arr);

arr.pop()       //deletes the last element in array
console.log(arr);

arr.unshift(9)  //shifts and adds the element from start
console.log(arr);

arr.shift()  //shifts and deletes the element from start
console.log(arr);

console.log(arr.includes(2) );    //checks the element is present in the array

console.log(arr.indexOf(true));      //finds the index at the given element

const newarr = arr.join()  //converts the array into string
console.log(arr);
console.log(newarr);
console.log(typeof newarr);

//slice and splice  ### interview question

//what is difference between slice and splice??
// slice gives a part of array but does not change the original array
//whereas splice also gives the part of array but it removes that part from original array
//i,e it manipulates the original array

console.log("A",arr);

const myn1 = arr.slice(0,3)
console.log(myn1);
console.log("B",arr);

const myn2 = arr.splice(1,3)
console.log(myn2)
console.log("C",arr);
