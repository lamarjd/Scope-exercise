/***********************************************************************

 Example 1:
 let table1 = recVolume(5); // returns a function
 table1(4); // returns a function
 console.log(table1(3)); // prints 60
 console.log(table1(145)); // STILL prints 60

 Example 3:
 let table2 = recVolume(3); // returns a function
 table2(2); // returns a function
 console.log(table2(1)); // prints 6
 console.log(table2(75)); // STILL prints 6


 For this problem you will be writing a function capable of finding the volume
 for a rectangle (height * width * length). In order to enter the
 required measurements we'll need to measure them one at a time.

 Write a function named `recVolume(height)`. The recVolume function will be passed
 a height int and will return a function. The function returned by recVolume can
 then be invoked two more times with a single argument number each time (one for
 length and one for width). Once all three numbers (height, width, length) have
 been collected return the volume of the rectangle. Any subsequent calls to the
 function returned by recVolume should continue to return the original volume.
***********************************************************************/
/*
  - create count variable
  - once count = 3 do maths
  - return the function if it does not = 3
  - if the count > 3, return volume
*/

function recVolume(height) {
  // let count = 0;
  // let volume = 1;
  let numArray = [height];
  function vol(n) {
  if (numArray.length < 3) {
    numArray.push(n);
  }
    if (numArray.length === 3) {
      let product = numArray.reduce((accum, num) =>{
        return accum *= num;
      })
      return product;
    } else {
    return vol;
  }
}
  return vol;
}


// Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60


// Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
