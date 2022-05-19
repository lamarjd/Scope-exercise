/***********************************************************************

 Example 1:
 console.log(countDownTimer(0)); // prints "Happy New Year!"

 Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

  Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
let threeDays = countDownTimer(3); // returns a function // 0
console.log(threeDays()); // returns a function // 1
console.log(threeDays()); // returns a function // 2
console.log(threeDays()); // prints "Happy New Year!" // 3

Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

***********************************************************************/
/*

initialize a count variable to track how many times the function has been invoked
if count = n, return "Happy New Year"

*/

let countDownTimer = (n) => {
  if (n === 0){
    return "Happy New Year!"
  }
  let count = 0;
  function counter() {
    count++;
    // console.log('count is: ', count);
    if (count === n) {
      return "Happy New Year!"
    }
    return counter;
  }
  return counter;
}

// Example 1:
  // console.log(countDownTimer(0)); // prints "Happy New Year!"
  // console.log('----');
// Example 3:
  // let oneDay = countDownTimer(1); // returns a function
  // console.log(oneDay()); // prints "Happy New Year!"
  // console.log('      -      ');
// Example 3:
  // let twoDays = countDownTimer(2); // returns a function
  // console.log(twoDays()); // returns a function
  // console.log(twoDays()); // prints "Happy New Year!"

// Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
