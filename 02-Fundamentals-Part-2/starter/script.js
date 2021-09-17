'use strict';

// use const by default to avoid accidental errors - thought by Jonas
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// => Uncaught ReferenceError: hasDriverLicense is not defined
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!")

// 33. FUNCTIONS

function logger() {
  console.log('Mic test, mic test');
}

logger();

/**
 * 
 * @param {int} apples 
 * @param {int} oranges 
 */
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// const orangeJuice = fruitProcessor(0, 5);
// const appleOrangeJuice = fruitProcessor(3, 3);
// console.log(appleJuice);
// console.log(orangeJuice);
// console.log(appleOrangeJuice);
/*
// Function DECLARATION
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1987);

// Function EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1987);

// ARROW Function
const calcAge3 = (birthYear) => {
  return 2037 - birthYear;
}
const age3 = calcAge3(1987);

// ARROW Function w/ implicit return (one liner)
const calcAge4 = birthYear => 2037 - birthYear;

const age4 = calcAge4(1987);

*/
// 36. Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`

  return juice;
}

console.log(fruitProcessor(2, 3));

// a way to think of args is a local var to each function

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsToRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  const message = `${firstName} is ${retirement} years away from retirement.`

  if (retirement > 0) {
    return message;
  } else {
    return -1;
  }
}

console.log(yearsToRetirement(1991, 'Jonas'));

/*
CODING CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team). A team ONLY wins if it has at least DOUBLE the
average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of the 3
scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team
as parameters and then logs the winner to the console together with the victory
points, according to the rule above.
4. Use the 'checkWinner function to determine the winner for both DATA1 and
DATA2
5. Ignore draws this time

TEST DATA1: Dolphins score 44, 23, 71. Koalas score 65, 54, 49
TEST DATA2: Dolphins score 85, 54, 41. Koalas score 23, 34, 27
*/

const calcAvg = (scores) => {
  let i = 0;
  let sum = 0;
  while (i < scores.length) {
    sum = sum + scores[i];
    i++;
  }

  const average = sum / i;
  return average;
}
const dolphinData1 = [44, 23, 71];
const dolphinData2 = [85, 54, 41];
const koalaData1 = [65, 54, 49];
const koalaData2 = [23, 34, 27];
const avgDolphins1 = calcAvg(dolphinData1);
const avgKoalas1 = calcAvg(koalaData1);
const avgDolphins2 = calcAvg(dolphinData2);
const avgKoalas2 = calcAvg(koalaData2);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= (avgKoalas * 2)) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= (avgDolphins * 2)) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No winner (${avgDolphins} vs ${avgKoalas})`);
  }
}

console.log(checkWinner(avgDolphins1, avgKoalas1));
console.log(checkWinner(avgDolphins2, avgKoalas2));

/* Jonas solution
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log('No team wins...');
  }
}

*/

// 39 Intro to Arrays
// bracket notation/literal notation
const friends = ['Andy', 'Dan', 'Walker', 'Andrew', 'CJ'];
// using the Array function (Array constructor)
const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]) // => "Andy"
console.log(years[0]) // => "1991"

/*
CODING CHALLENGE #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above. Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.*
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, bill + tip.

TEST DATA: 125, 555, and 44
*/

// const bills = [125, 555, 44];

// const calcTip = (bills) => {
//   const total = [];
//   const tips = [];

//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] >= 50 || bills[i] <= 300) {
//       tips.push(bills[i] * 0.15);
//       total.push((bills[i] * 0.15) + bills[i]);
//     } else {
//       tips.push(bills[i] * 0.20);
//       total.push((bills[i] * 0.20) + bills[i])
//     }
//   }

//   return { total, tips };
// }

// console.log(calcTip(bills))

/* JONAS SOLUTION
const calcTip = function(bill) {
  return bill >= && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills =[ 125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips);
*/

/*
CODING CHALLENGE #3 Objects review

Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!
Remember BMI = mass / height ** 2 = mass / (height * height)
mass is in kg and height is in meters.

1. For each of them create an object with properties for their:
full name, mass, and height (Mark Miller, John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI.
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, toghet er with the full name
and the respective BMI.

TEST DATA:
Mark weighs 78kg and is 1.69m tall
John weighs 92kg and is 1.95m tall
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;

    return this.bmi;
  }
}
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;

    return this.bmi;
  }
}
mark.calcBMI();
john.calcBMI();
console.log(mark, john);

if (mark.bmi < john.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
} else {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`)

}

// 47 LOOPING ARRAYS, BREAK and CONTINUE

const array = [1, 2, "Hello", true, null, false, 4, "Mario"];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== 'string') {
    continue;
  }
  console.log(array[i], typeof array[i]);
}

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== 'number') {
    break;
  }
  console.log(array[i], typeof array[i]);
}

/*
fun example of a double for loop from the udemy vids
I like this because you have exercises and certain reps, good way to think of
it.

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`)
  }
}
*/

/*
Coding Challenge #4

Let's improve Steven's tip calkculator!
I already did this in challenge 2, oops
 */

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));