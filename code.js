//===================== MAP =============================

//------------------- 1 -------------------
// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//   // your code here
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function doubleNumbers(arr){
  return arr.map((arr)=>arr*2)
}

console.log(doubleNumbers([2, 5, 100]));

//------------------- 2 -------------------
// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//   // your code here
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function stringItUp(arr){
    return arr.map((arr)=>arr.toString())
  }
  
  console.log(stringItUp([2, 5, 100]));

//------------------- 3 -------------------
// 3) Capitalize each of an array of names
// function capitalizeNames(arr){
//     // your code here
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  function capitalizeNames(arr){
    return arr.map(index=>index.charAt(0).toUpperCase() + index.slice(1))
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

//------------------- 4 -------------------
// 4) Make an array of strings of the names
// function namesOnly(arr){
//   // your code here
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function namesOnly(arr){
  return arr.map((index)=>index.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//===================== TRY IT YOUR SELF =============================
// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
  // your code here
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
  // your code here
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

//===================== FILTER =============================
// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//   // your code here
// }
// test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

function fiveAndGreaterOnly(arr) {
  return arr.filter(index=>index>5)
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2) Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//   // your code here
// }
// test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

function evensOnly(arr) {
  return arr.filter(index => index%2==0)
}
// test
console.log(evensOnly([3, 6, 8, 2]));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// function fiveCharactersOrFewerOnly(arr) {
//   // your code here
// }
// test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(str=> str.length<6)
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//===================== TRY IT YOUR SELF =============================
// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.


function peopleWhoBelongToTheIlluminati(arr){
  // your code here

}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
function ofAge(arr){
  // your code here
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
// [ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]

