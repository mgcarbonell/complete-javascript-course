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
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= (avgDolphins * 2)) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No winner (${avgDolphins} vs ${avgKoalas})`);
  }
}

console.log(checkWinner(avgDolphins1, avgKoalas1))
console.log(checkWinner(avgDolphins2, avgKoalas2))

/* Jonas solution
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);

*/