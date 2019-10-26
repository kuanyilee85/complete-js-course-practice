// Lecture: variables
let i = 23;

console.log(
  "we can only use the variable after it declared and defined; otherwise ES6 will shows not defined"
);

for (let i = 0; i < 5; i++) {
  console.log("i inside clock: " + i);
}

console.log("i outside of block: " + i);

// Lecture: Blocks and IIFEs

//ES5, IIFE
(function() {
  var c = 3;
})();
// console.log(c);

//ES6, IIFE, For data privacy
{
  const a = 1;
  let b = 2;
}
console.log("shows not defined: ");

// console.log("shows not defined: " + a + b);

//Lecture: strings

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6 use BACKTICK ``
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("???"));
console.log(`${firstName} `.repeat(5));

// Lecture: Arrow Functions

const years = [1902, 1932, 1982, 1950, 1999];

//ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

//ES6
// one argument, one line
let ages6 = years.map(el => 2019 - el);

console.log(ages6);

// two argument, one line
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);

console.log(ages6);

// two argument, multiple lines
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);
