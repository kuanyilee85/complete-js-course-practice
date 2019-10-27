// Lecture: variables

/*
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

*/

//Lecture: strings

/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
  return 2019 - year;
}

ES5
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

ES6 use BACKTICK ``
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

*/

// Lecture: Arrow Functions
/*
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

*/

// Lecture: arrow function 2

/*
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

'this' key word is shared by its surrounding content
var box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
box66.clickMe();

function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["bob", "jane", "john"];
new Person("mark").myFriends5(friends);

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

*/

// Lecture: Arrays; For of,
// const boxes = document.querySelectorAll(".box");
// ES5

// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = "dodgerblue";
// });

// ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// ES5
// for (var j = 0; j < boxesArr5.length; j++) {
//   if (boxesArr5[j].className === "box blue") {
//     continue;
//   } else {
//     boxesArr5[j].textContent = "I changed to blue.";
//   }
// }

// ES6
// for (const cur of boxesArr6) {
//   if (cur.className.includes("blue")) {
//     continue;
//   } else {
//     cur.textContent = "I changed to blue.";
//   }
// }

//ES5, index of
// var ages = [12, 13, 15, 17, 11, 14];

// var full = ages.map(function(cur) {
//   return cur >= 16;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// ES6
// console.log(ages.findIndex(cur => cur >= 16));
// console.log(ages.find(cur => cur >= 16));

//**********************************************Lecture: Spread operator */
//convenient way to expand elements of an array in place of like argument and function calls
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];
const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

//transfer from nodeList to array by from() and loop through bu forEach()
Array.from(all).forEach(cur => (cur.style.color = "purple"));

*/

//*****************************************Rest parameter */
//aloow us to pass an arbitrary number of argument into a function

/*
function isFullAge5() {
  //console.log(arguments);
  //transfer argument object into array
  var argsArr = Array.prototype.slice.call(arguments);

  //cur means the current elements of array from the argument
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}
isFullAge5(1990, 1999, 1965);

// ES6
//APREAD OPERATOR IS USED IN FUNCTION CALL, WHILE REST PARAMETER IS USED IN FUNCTION DECLARATION TO SET ARBITRARY NUMBER
function isFullAge6(...years) {
  console.log(years);
  years.forEach(cur => console.log(2016 - cur >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/

//ES5

/*
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= limit);
  });
}

//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

*/

/****************Lecture: Default parameters*/
//when you want the function have default value, preset

//ES5

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "american")
    : (nationality = nationality);

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "spanish");
*/

//ES6
/*
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "spanish");
*/

/******************Lesture: MAPS **************************************/
//Harsh table: map() string keys to arbitrary values in ES6
/*
const question = new Map();
question.set(
  "question",
  "what is the offical name of the lastest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct number:D");
question.set(false, "wrong, please try again!");
console.log(question.get("question"));
console.log(question.size);

// if (question.has(4)) {
//   question.delete(4);
//   console.log("Answer 4 is here");
// }

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));

*/

/**********************Lecture Classes*****************************/

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

//////////////////////////////////////////////////////////////////
// Lecture: Classes and subclasses
//Inheritance between classes: Inherit methods from class to another class

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/
