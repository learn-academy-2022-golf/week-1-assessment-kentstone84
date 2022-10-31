// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

// Use a conidtional to evaluate the sting of tempatures to determain if the values are met to get the perdetemined return. 
// Using the most common type of conidtions statment, if - else, it will return if we are above or below the boiling point. 
// We are using one of the most powerful parts of Javascript by using logic. We will be using a given input (temps) and JS will evalute a proper return. 
//*side note* I tried to combine all of this into one function. I know others I spoke      with made seperate functions but I wanted to combine all of it into one working function. I could not get all 3 to answer like I wanted. I could only get 2 of the 3 to respond in kind. But as you can see I wrote two seperate methods but tried for hours. 

const temp1 = 42
const temp2 = 212
const temp3 = 350 

if (temp1 > 212) 
    console.log("${temp1} is below boiling point")
 else if (temp2 === 212) 
    console.log("&{temp2} is at boiling point")
 else (temp3 < 212) 
    console.log("${temp3} is above boiling point")


// **Try number 2** // function temp(temp1, temp2, temp3) {
    If(temp1 < 212); {
        return "42 is below boiling point"
    }
}
    else if (temp2 >= 350) {
        return "350 is above boiling point"
    }
else (temp >= 212) { 
        return "is at boiling point"
    }
console.log()

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
Expected output: "212 is at boiling point"




// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// First we will setup the consts as 1 and 2 to give a unique identifer to each array. 
// I will use a .push method to add the first elements to the second array. 
// To get the final output of 9 to answer the question I will use console.log combined

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
Expected output: 9
Given output: 9 

const padres1998WorldSeriesRuns1 = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns2 = [6, 3, 5, 3]
const combined = padres1998WorldSeriesRuns1.push(...padres1998WorldSeriesRuns2)
	
console.log(combined) 

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.


// Describe your process:// Reversing string is one of the most asked JS questions in technical inteviews. 
// There 3 ways to reverse a string, with built in methods, with a decrementaing for loop, and recusion. Since loop is what was taught lets use the most basic. 
// Starting with a reverseString funtion  
// Use a for loop 
// Console.log will contain a reverseString method to display the 2202 floG in proper sequence and formatting. 

function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }
    
    return result;
}
    console.log(reverseString("Golf 2022"));

// const currentCohort = "Golf 2022"
// Expected output: "2202 floG"
// Given output using loop: 2202 floG

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.
 
// Describe your process: First we have to sort the array and get it indexed. 
// we assign function and use a, b
// using a loop i - 0 and then return the arrray in sequence selection the position of 42 and 10. 

function getIndexOfIns(arr, num) {
	arr.sort( 
  function(a, b) {
  	return a - b;
});

for (var i - 0; i < arr.length; i++ ){
	if (arr[i] >= num) {
  	return i;
    }
	 }	
	return arr;
}

getIndexOfIns([3, 34, 42, 5, 5, 10, 27, 42, 10], 42)

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// Expected output: 7

// const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: if back tics are included in the array of numbers even with a sort function the numbers will not change places* So I start with a const summertemps, summertemps being my callback. With a compare function the numbers will be compared using b - a in the return to sort the numbers highest to lowest. 

const summertemps = [79, 80, 72, 73, 82, 77, 76];
summertemps.sort(compareFunction);
function compareFunction(a, b){
    return b - a
}
const winterTemps = [59, 68, 62, 59, 66, 67, 66];
winterTemps.sort(compareFunction)

console.log(winterTemps, summertemps);

// const sanDiegoSummerTemperatures = 79, 80, 72, 73, 82, 77, 76
// Expected output: [82, 80, 79, 77, 76, 73, 72]
// Given output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = 59, 68, 62, 59, 66, 67, 66
// Expected output: [68, 67, 66, 66, 62, 59, 59]
// Given output:  [68, 67, 66, 66, 62, 59, 59]