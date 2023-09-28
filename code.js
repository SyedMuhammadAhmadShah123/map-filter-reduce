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
