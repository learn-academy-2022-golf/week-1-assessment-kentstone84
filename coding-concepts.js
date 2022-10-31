// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?

// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// // a) Your answer: add indigo to the end of the array and give me 5. 
// // b) Verify and explain: Using push() method will add a new item to the end of the existing array. The push() method will return the new length of the array. 

// // --------------------1) What will this log?

//  const cohort = "LEARN 2022"
//  console.log(cohort.length)

// // a) Your answer: 10. The length of the array.
// // b) Verify and explain: .length tells us that it will count the number of indexes inside the array. Starting at a zero index this array has a value of 10 including spaces, numbers and letters. It looks at all spaces indiscriminately. 

// // --------------------2) What will this log?

// const greeting = "Hello World!"
//  console.log(greeting[4])

// // a) Your answer: "o"
// // b) Verify and explain: Again we start at the zero index. the boxed [4] refers to indexing of the array. H being 0 we count to [4] bringing us to o. The [] operator also converts the expression of the array into a string. 

// // --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// // a) Your answer: Ruby
// // b) Verify and explain: This function will return Ruby because of the 1 and [index]. This allows the first word in the array to be counted as a single index so starting at 0 we count 1 bringing us to Ruby. 

// // --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// // a) Your answer:SATURDAY, SUNDAY
// // b) Verify and explain: I was wrong! This function was not written correctly. By placing square bracket operators around the Saturday and Sunday it makes weekendDays.toUpperCase no a function. To make this properly work it would be...  
const weekendDays = "saturday, sunday";
console.log(weekendDays.toUpperCase());
Output "SATURDAY, SUNDAY"

// // --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// // a) Your answer: 3
// // b) Verify and explain: This function returned 'number' and I honstly am not sure why. After researching I believe it has to do with the typeOf. It tries to parse things into numbers. 
