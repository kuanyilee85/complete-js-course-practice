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

// let firstName = "John";
// let lastName = "Smith";
// const yearOfBirth = 1990;
// function calcAge(year) {
//   return 2019 - year;
// }

// ES5
// console.log(
//   "This is " +
//     firstName +
//     " " +
//     lastName +
//     ". He was born in " +
//     yearOfBirth +
//     ". Today, he is " +
//     calcAge(yearOfBirth) +
//     " years old."
// );

// ES6 use BACKTICK ``
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith("J"));
// console.log(n.endsWith("th"));
// console.log(n.includes("???"));
// console.log(`${firstName} `.repeat(5));

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

// Lecture: arrow function 2
// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};
// box5.clickMe();

// ES6
var box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
// box6.clickMe();

// ES6

// 'this' key word is shared by its surrounding content
// var box66 = {
//   color: "green",
//   position: 1,
//   clickMe: () => {
//     document.querySelector(".green").addEventListener("click", () => {
//       var str =
//         "This is box number " + this.position + " and it is " + this.color;
//       alert(str);
//     });
//   }
// };
// box66.clickMe();

function Person(name) {
  this.name = name;
}

// ES5
// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(el) {
//       return this.name + " is friends with " + el;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// var friends = ["bob", "jane", "john"];
// new Person("mark").myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

var friends = ["bob", "jane", "john"];
new Person("Dave").myFriends6(friends);

// Lecture: Destructuring

//ES5
var john = ["john", 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ["Mark", "30"];
console.log(name);
console.log(age);

const obj = {
  firstName: "John",
  lastName: "Smith"
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age2 = new Date().getFullYear() - year;
  return [age2, 65 - age2];
}

const [age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);

// Lecture: Arrays; For of,
const boxes = document.querySelectorAll(".box");
// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// ES5
// for (var j = 0; j < boxesArr5.length; j++) {
//   if (boxesArr5[j].className === "box blue") {
//     continue;
//   } else {
//     boxesArr5[j].textContent = "I changed to blue.";
//   }
// }

// ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  } else {
    cur.textContent = "I changed to blue.";
  }
}

//ES5, index of
var ages = [12, 13, 15, 17, 11, 14];

var full = ages.map(function(cur) {
  return cur >= 16;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 16));
console.log(ages.find(cur => cur >= 16));
