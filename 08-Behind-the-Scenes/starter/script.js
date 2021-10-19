'use strict';
/*
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
*/
/*
HOISTING and How Does It Work?

Hoisting: Makes some types of variables accessible/usable in the code before 
they are actually declared. "Variables lifted to the top of their scope."

What's going on behind the scenes there? Before the execution of the code it is 
is canned for variable declarations, and for each variable, a new property is 
created in the variable environment object.

.--------------------------------.----------.--------------------.-------------.
|                                | Hoisted? | Initial Value      | Scope       |
|function declarations           |  yes     | Actual function    | Block strict|
|                                |          |                    |             |
|var variables                   |  yes     | undefined          | Function    |
|                                |          |                    |             |
|let and const variables         |  No*     | <unitialized>, TDZ | Block       |
|                                |          |                    |             |
|function expressions and arrows | It depends on how they were created         |
|                                | var is hoisted to undefined, const/let not  |
|                                | before defined; they act like variables     |
'--------------------------------'----------'--------------------'-------------'
* Technically they are, but in practice they are not
* TDZ = Temporal Dead Zone, where the variables are placed which makes it so 
that they cannot be accessed between the beginning of the scope and variable 
declaration.
*/
/*
TDZ In practice

console.log(me);
console.log(job);
console.log(year);

var me = 'Mario'; // undefined
let job = 'teacher'; // ReferenceError: Cannot access 'job' before initialization
// job is in the TDZ - it cannot be accessed quite yet
// it starts at the current scope (global) -> definition
const year = 1987;
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDelc(a, b) {
  return a + b;
}
// returns undefined

const addExpr = function (a, b) {
  return a + b;
};
// crash -> ReferenceError: cannot access addExpr before initialization, TDZ

const addArrow = (a, b) => a + b;
// crash -> ReferenceError: cannot access addArrow before initialization, TDZ

If we were to make the consts vars they would hoist but to undefined, and the 
arrow function will crash.
*/
/*

var might sound like a good idea to use more often then, right? Maybe not.

==================Hoisting Pitfall=================

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart () {
  console.log("All products deleted")
}
=> All products deleted
but why?! the numProducts variable is undefined because numProduct gets hoisted 
to undefined. Therefore, our if not numProducts will fire off the function on 
initialization because undefined is a falsey value.
*/
/*
============================= SOME BEST PRACTICES ==============================
1. Don't just use var to declare variables
2. Use const most of the time
3. let if you really need to change it later
4. declare your variables at the top of every scope
5. always declare all your functions first, and use them only after the 
declaration
6. This applies to all functions, it's not clean.
7. These are best practices, someone will probably tell you something different at some point, but these are 'best practices'
================================================================================
*/
