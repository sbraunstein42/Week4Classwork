
// ================================
// JavaScript Array Challenges
// ================================

// -----------------------------------------------

// Challenge 1: Access an Array Item
// Create an array called "fruits" with at least 4 fruit names.
// Log the first item to the console.

var fruits = ["Grape", "Banana", "Cherry", "Date"];
console.log(fruits[0]);



// -----------------------------------------------

// Challenge 2: Change an Array Item
// Using the "fruits" array, change the second fruit to something new.
// Log the array to confirm the change.

fruits[1] = "Blueberry";
console.log(fruits);



// -----------------------------------------------

// Challenge 3: Add an Item to an Array
// Add a new fruit to the end of the "fruits" array using push().
// Log the array to confirm it was added.

fruits.push("Elderberry");
console.log(fruits);


// -----------------------------------------------

// Challenge 4: 2D Array Access
// Create a 2D array called "matrix" that is 2x2.
// Fill it with numbers of your choice.
// Log the number in the first row, second column.

var matrix = [
    [1, 2],
    [3, 4]
  ];
  console.log(matrix[0][1]);


// -----------------------------------------------

// Challenge 5: Parallel Arrays
// Create two arrays: "names" and "ages".
// Put 3 items in each so that the indices match (example: names[0] is  "Alice", ages[0] is 10).
// Log a sentence using the first index like: "Alice is 10 years old."

var names = ["Alice", "Bob", "Charlie"];
var ages = [10, 12, 8];
console.log(names[0] + " is " + ages[0] + " years old."); // Solution: "Alice is 10 years old."




// -----------------------------------------------

// Challenge 6: Make three parallel arrays, each with random lines of haikus in them.
// (First array should have five syllable lines, second array should have seven s)
// Write code that composes a random haiku from the arrays.


let fiveSyllables1 = ["Morning sun rises", "Quiet forest path", "Leaves fall softly"];
let sevenSyllables = ["A gentle breeze whispers through", "Mountains echo songs of old", "Raindrops patter on the roof"];
let fiveSyllables2 = ["Shadows fade away", "Flowers bloom anew", "Evening calm descends"];

let line1 = fiveSyllables1[Math.floor(Math.random() * fiveSyllables1.length)];
let line2 = sevenSyllables[Math.floor(Math.random() * sevenSyllables.length)];
let line3 = fiveSyllables2[Math.floor(Math.random() * fiveSyllables2.length)];

console.log(line1);
console.log(line2);
console.log(line3);