// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challange #1 Section 3
/*
PROBLEM:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the teparature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*
1. Understand the problem:
Temp amptitude? Difference between highest and lowest temp. Here it would be -6 and 17 => 23
We need to find a max and min temperature
There's a sensor error? What does it look like => 'error' the string, we can ignore it. So ignore it.

2. Breaking up into sub-problems
- How do we ignore errors?
- Find max val in temp arr
- Find min val in temp arr
- Subtracrt min from max (amplitude) and return it
*/

// const temperatureAmplitude = (arr) => {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     const cur = arr[i];
//     if (typeof cur !== 'number') continue;
//     if (cur > max) max = cur;
//     if (cur < min) min = cur;
//   }

//   // console.log(max)
//   // console.log(min)
//   const amplitude = max - min;
//   return amplitude;
// }

// console.log(temperatureAmplitude(temperatures));

/*
PROBLEM 2!

Function should now receive 2 arrays of temps

1. Understand the problem
Should we just implement the functionality twice? No.
We will need to merge the two arrays.

2. Breaking up into sub-problems
- Merge the arrays

*/
const temperatures2 = [1, 3, 5, -2, -4, -10, 10, 11, 'error', 3, 6, 22]

const temperatureAmplitude = (arr1, arr2) => {

  const arr = [...arr1, ...arr2];
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    if (typeof cur !== 'number') continue;
    if (cur > max) max = cur;
    if (cur < min) min = cur;
  }

  // console.log(max)
  // console.log(min)
  const amplitude = max - min;
  return amplitude;
}

console.log(temperatureAmplitude(temperatures, temperatures2));