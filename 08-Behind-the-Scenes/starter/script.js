'use strict';
// global scope
function calcAge(birthYear) {
  // function block scope
  const age = 2037 - birthYear;

  function printAge() {
    // second function block scope
    const output = `You are ${age} born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    // block scope
    const str = `Oh and you're a milennial`;
    console.log(str);
  }
  // console.log(firstName);
  printAge();
  return age;
}

// global scope
const firstName = 'Mario';
calcAge(1987);
