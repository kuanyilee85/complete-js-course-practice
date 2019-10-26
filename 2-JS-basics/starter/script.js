/*****************************
 * Variable and data type
 */
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;
var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
*/
/******************************
 * Variable mutation and type coercion
 */

// var firstNmae = "John";
// var age = 28;

//JS converse number to string in the below ==>type coercion
// console.log(firstNmae + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstNmae +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     ". Is he maried? " +
//     isMarried
// );

//Variable mutation
// age = "twenty eight";
// job = "driver";

// alert(
//   firstNmae +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     ". Is he maried? " +
//     isMarried
// );

// var lastName = prompt("What is his last Name?");
// console.log(firstNmae + " " + lastName);

/*************************************
 * typeof operators
 */

// console.log(typeof job);

/************************************
 * 1st Coding challenge
 */

// var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI;

// var johnMass = prompt("Please enter John's weight in kg.");
// var johnHeight = prompt("Please enter John's height in meter.");
// var markMass = prompt("Please enter Mark's weight in kg.");
// var markHeight = prompt("Please enter Mark's height in meter.");
// var BMIMark = markMass / (markHeight * markHeight);
// var BMIJohn = johnMass / (johnHeight * johnHeight);
// console.log("Mark's BMI: " + BMIMark + " ,John'S BMI: " + BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI larger than John's!");
// } else {
//   console.log("John's BMI larger than Mark's!");
// }
/*******************************************
 * IF/ELSE STATEMENT
 */

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

// isMarried = true;

// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

/*********************************************
 * Boolean logic
 */

// var firstName = "John";
// var age = prompt("Enter John's age.");

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

/**********************************************
 * Ternary operator
 */

// var firstName = "John";
// var age = prompt("Enter John's age.");

// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + "drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";

// console.log(drink);

/**********************************************
 * Switch statement
 */

// var job = "teacher";
// var firstName = "John";

// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches how to code");
//     break;
//   case "driver":
//     console.log(firstName + " drive Uber");
//     break;
//   case "designer":
//     console.log(firstName + " designs aewsome website");
//     break;
//   default:
//     console.log(firstName + " does something else");
// }

/**********************************************
 * Truthy and Falsy Values and Equality Operators
 */
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 0;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable is NOT been defined");
// }

/**********************************************
 * CODE CHALLENGE 2
 */

// var JohnAve = (140 + 120 + 100) / 3;
// var MikeAve = (116 + 100 + 123) / 3;
// var MaryAve = (97 + 134 + 42) / 3;

// console.log(
//   "John's score: " +
//     JohnAve +
//     " , Mike's score: " +
//     MikeAve +
//     " , Mary's score: " +
//     MaryAve
// );

// if (JohnAve > MikeAve && JohnAve > MaryAve) {
//   console.log("John's team is the winner!");
// } else if (MikeAve > JohnAve && MikeAve > MaryAve) {
//   console.log("Mike's team is the winner!");
// } else if (MaryAve > JohnAve && MaryAve > MikeAve) {
//   console.log("Mary's team is the winner!");
// } else {
//   console.log("There is a draw!");
// }

/**********************************************
 * array challenge 3
 */

// function tipCalaculate(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return bill * percentage;
// }

// var bills = [124, 48, 268];

// var tips = [
//   tipCalaculate(bills[0]),
//   tipCalaculate(bills[1]),
//   tipCalaculate(bills[2])
// ];

// var final = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, final);

/**********************************************
 *  challenge 4
 */
// var john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   }
// };

// var mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   }
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log("john has higher BMI of " + john.bmi);
// } else if (john.bmi < mark.bmi) {
//   console.log("mark has higher BMI of " + mark.bmi);
// } else {
//   console.log("they have the same BMI of " + john.bmi);
// }

/**********************************************
 *  Loops and iteration
 */

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var john = ["john", "Smith", 1999, "designer", false];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// //while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

//continue and break, looping backward
// var john = ["john", "Smith", 1999, "designer", false];

// for (var i = john.length - 1; i >= 0; i--) {
//   //   if (typeof john[i] !== "string") continue;
//   console.log(john[i]);
// }

/**********************************************
 *  Challenge 5
 */

// john = [124, 48, 268, 180, 42];
// mark = [77, 275, 110, 45];

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.calcTips();

var mark = {
  fullName: "Mark Miller",
  bills: [77, 275, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family paid higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family paid higher tips, with an average of $" +
      mark.average
  );
}
