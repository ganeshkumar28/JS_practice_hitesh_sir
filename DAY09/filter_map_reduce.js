// filter, Map, Reduce

//filter
//filter takes a callback function and it can be assigned to any variable
// It expects a condition to check

const numbers = [1,2,3,4,5,6,7,8,9];

const result = numbers.filter((numbs) => (numbs > 5))
console.log(result);

// Example to understand Better

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

//  Maps

const mynumbers = [1,2,3,4,5,6,7,8]

// const newnumbs = mynumbers.map((num)=>num + 10)
// console.log(newnumbs);

// chaining method
const chaining = mynumbers.map((numbs) => numbs * 10).map((numbs)=> numbs + 1).filter((numbs)=>numbs>=40) 
console.log(chaining);

// Reduce

const num = [1,2,3]
const initial = 0
const total = num.reduce((acc,curr)=>acc+curr,initial)
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);