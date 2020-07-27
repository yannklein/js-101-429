// console.log("Hello Veronica from JS.");

// Variables in JS
const name = "Rob";
let age = 21;
var job = "plumber"; // old variable syntax

age = 23;
// name = "Roberta" //const cannot be re-assigned!!

// How to display the last character of a string?
const greetings = "hello";
console.log(greetings[greetings.length-1]);

// Slicing string in JS
// console.log("Hello".slice(1,4)); // slice from index 1 to index 4 excluded
"Hello".substring(1,4); // same as slice


// Interpolation with JS
const firstName = "Moe";
const lastName = "Aoki";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Array CRUD

students = ["Moe","Yoshiki","Samir","Patrick"];
// Create
console.log(students);
students.push("Jocelyn")
console.log(students);

// Read
console.log(students[0]);

// Update
students[1] = "Super Yoshiki";
console.log(students);

// Destroy
const deleted =　students.splice(2, 2);
console.log(students, deleted);

// Looping over arrays
const other_students = "Rob,Marc,Micky,Veronica,Jocelyn".split(",");
other_students.forEach((student) => {
  // iteration here!
  // console.log(`Super ${student}`);
});

//Conditionals
if (age === 18) {
  console.log("You finally can vote!");
}
else if (age < 18) {
  console.log("Please wait for a while");
}
else {
  console.log("You're old!");
}


// Arrow functions in JS
// const square = (x) => {
//   return x*x
// };

const square = x => x*x; //the one liner version 💪
console.log(square(64));

// Example for capitalize
const weirdName = "sAmIr";
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return `${firstLetter}${restOfWord}`;
};
// const capitalize = word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
console.log(capitalize(weirdName));

// Looping over an object in JS
const student = {name: "Micky", age: "20", particularity: "cool"};

Object.keys(student) // returns an array with the object keys

Object.keys(student).forEach((key) => {
  console.log(`${key}: ${student[key]}`);
});






