/*
var john = {
  name: "john",
  birth: "1985",
  job: "teacher"
};

var Person = function(name, birth, job) {
  (this.name = name), (this.birth = birth), (this.job = job);
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.birth);
};

Person.prototype.lastname = "smith";

var john = new Person("john", 1990, "teacher");
var jane = new Person("jane", 1997, "designer");
var mark = new Person("mark", 1980, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);
*/

/*****************object.create
 */

//Primitives vs objects

/*functions
var year = [1980, 1985, 2010, 1890];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var age = arrayCalc(year, calculateAge);
console.log(age);

var fullAge = arrayCalc(age, isFullAge);
console.log(fullAge);

var heartRate = arrayCalc(age, maxHeartRate);
console.log(heartRate);

*/

/*********return functions
 *
 */

/*******IIFE:Immediately Invoked Function Expression
 * For data privacy
 */

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function(goodluck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodluck);
// })(5);

/******Closure */
// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "designer") {
//       console.log(name + " ,can you please explain what UX designer is?");
//     } else if (job === "teacher") {
//       console.log(name + " ,what subject do you teach?");
//     } else {
//       console.log(name + " ,what do you do?");
//     }
//   };
// }

// // var careerJohn = interviewQuestion("teacher");
// // careerJohn("john");

// interviewQuestion("teacher")("john");

// // var careerJane = interviewQuestion("designer");
// // careerJane("jane");

// interviewQuestion("designer")("jane");

// // var careerDavid = interviewQuestion("driver");
// // careerDavid("david");

// interviewQuestion("driver")("david");

/***************
 * Bind, Call, Apply */

/*
var john = {
  name: "john",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(timeOfDay, this.name, this.age, this.job);
    } else if (style === "friendly") {
      console.log(timeOfDay);
    }
  }
};

var emily = {
  name: "emily",
  age: 30,
  job: "designer"
};

john.presentation("formal", "morning");

john.presentation.call(emily, "formal", "afternoon");

var emilyFormal = john.presentation.bind(emily, "formal");

emilyFormal("good noon");
*/

/**CODE CHALLENGE 7 */
