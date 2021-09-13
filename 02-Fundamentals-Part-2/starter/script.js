'use strict';

// use const by default to avoid accidental errors - thought by Jonas
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// => Uncaught ReferenceError: hasDriverLicense is not defined
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!")

// 33. FUNCTIONS
